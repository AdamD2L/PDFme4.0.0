import React, {
  Ref,
  MutableRefObject,
  useRef,
  useState,
  useEffect,
  forwardRef,
  useCallback,
} from 'react';
import styles from './index.module.scss';
import { OnDrag, OnResize } from 'react-moveable';
import { SchemaForUI, Size } from '../../../libs/type';
import { round, flatten, uuid } from '../../../libs/utils';
import { ZOOM, RULER_HEIGHT } from '../../../libs/constants';
import { usePrevious } from '../../../libs/hooks';
import Paper from '../../Paper';
import SchemaUI from '../../Schemas/SchemaUI';
import Selecto from './Selecto';
import Moveable from './Moveable';
import Guides from './Guides';
import Mask from './Mask';

const DELETE_BTN_ID = uuid();
const fmt4Num = (prop: string) => Number(prop.replace('px', ''));
const fmt = (prop: string) => round(fmt4Num(prop) / ZOOM, 2);
const isTopLeftResize = (d: string) => d === '-1,-1' || d === '-1,0' || d === '0,-1';

const DeleteButton = ({ activeElements: aes }: { activeElements: HTMLElement[] }) => {
  const top = Math.min(...aes.map(({ style }) => fmt4Num(style.top)));
  const left = Math.max(...aes.map(({ style }) => fmt4Num(style.left) + fmt4Num(style.width))) + 10;

  return (
    <button
      id={DELETE_BTN_ID}
      className={`${styles.dltBtn}`}
      style={{ position: 'absolute', top, left }}
    >
      x
    </button>
  );
};

interface GuidesInterface {
  getGuides(): number[];
  scroll(pos: number): void;
  scrollGuides(pos: number): void;
  loadGuides(guides: number[]): void;
  resize(): void;
}

interface Props {
  height: number;
  hoveringSchemaId: string | null;
  onChangeHoveringSchemaId: (id: string | null) => void;
  pageCursor: number;
  schemasList: SchemaForUI[][];
  scale: number;
  backgrounds: string[];
  pageSizes: Size[];
  size: Size;
  activeElements: HTMLElement[];
  onEdit: (targets: HTMLElement[]) => void;
  changeSchemas: (objs: { key: string; value: string | number; schemaId: string }[]) => void;
  removeSchemas: (ids: string[]) => void;
  paperRefs: MutableRefObject<HTMLDivElement[]>;
}

const Main = (props: Props, ref: Ref<HTMLDivElement>) => {
  const {
    pageCursor,
    scale,
    backgrounds,
    pageSizes,
    size,
    activeElements,
    schemasList,
    hoveringSchemaId,
  } = props;
  const { onEdit, changeSchemas, removeSchemas, onChangeHoveringSchemaId, paperRefs } = props;

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const verticalGuides = useRef<GuidesInterface[]>([]);
  const horizontalGuides = useRef<GuidesInterface[]>([]);
  const moveable = useRef<any>(null);

  const [isPressShiftKey, setIsPressShiftKey] = useState(false);
  const [editing, setEditing] = useState(false);

  const prevSchemas = usePrevious(schemasList[pageCursor]);

  const onKeydown = (e: KeyboardEvent) => {
    if (e.shiftKey) setIsPressShiftKey(true);
  };
  const onKeyup = (e: KeyboardEvent) => {
    if (e.key === 'Shift') setIsPressShiftKey(false);
    if (e.key === 'Escape' || e.key === 'Esc') setEditing(false);
  };

  const initEvents = useCallback(() => {
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);
  }, []);

  const destroyEvents = useCallback(() => {
    window.removeEventListener('keydown', onKeydown);
    window.removeEventListener('keyup', onKeyup);
  }, []);

  useEffect(() => {
    initEvents();

    return destroyEvents;
  }, [initEvents, destroyEvents]);

  useEffect(() => {
    if (prevSchemas === null) {
      moveable.current?.updateRect();

      return;
    }

    const prevSchemaKeys = Object.keys(prevSchemas[pageCursor] || {});
    const schemaKeys = Object.keys(schemasList[pageCursor] || {});

    if (prevSchemaKeys.join() === schemaKeys.join()) {
      moveable.current?.updateRect();
    }
  }, [pageCursor, schemasList, prevSchemas]);

  const onDrag = ({ target, left, top }: OnDrag) => {
    target.style.left = `${left < 0 ? 0 : left}px`;
    target.style.top = `${top < 0 ? 0 : top}px`;
  };

  const onDragEnd = ({ target }: { target: HTMLElement | SVGElement }) => {
    const { top, left } = target.style;
    changeSchemas([
      { key: 'position.y', value: fmt(top), schemaId: target.id },
      { key: 'position.x', value: fmt(left), schemaId: target.id },
    ]);
  };

  const onDragEnds = ({ targets }: { targets: (HTMLElement | SVGElement)[] }) => {
    const arg = targets.map(({ style: { top, left }, id }) => [
      { key: 'position.y', value: fmt(top), schemaId: id },
      { key: 'position.x', value: fmt(left), schemaId: id },
    ]);
    changeSchemas(flatten(arg));
  };

  const onResizeEnd = ({ target }: { target: HTMLElement | SVGElement }) => {
    const { id, style } = target;
    const { width, height, top, left } = style;
    changeSchemas([
      { key: 'width', value: fmt(width), schemaId: id },
      { key: 'height', value: fmt(height), schemaId: id },
      { key: 'position.y', value: fmt(top), schemaId: id },
      { key: 'position.x', value: fmt(left), schemaId: id },
    ]);
  };

  const onResizeEnds = ({ targets }: { targets: (HTMLElement | SVGElement)[] }) => {
    const arg = targets.map(({ style: { width, height, top, left }, id }) => [
      { key: 'width', value: fmt(width), schemaId: id },
      { key: 'height', value: fmt(height), schemaId: id },
      { key: 'position.y', value: fmt(top), schemaId: id },
      { key: 'position.x', value: fmt(left), schemaId: id },
    ]);
    changeSchemas(flatten(arg));
  };

  const onResize = ({ target, width, height, direction }: OnResize) => {
    if (!target) return;
    const s = target.style;
    const newLeft = fmt4Num(s.left) + (fmt4Num(s.width) - width);
    const newTop = fmt4Num(s.top) + (fmt4Num(s.height) - height);
    const obj: { top?: string; left?: string; width: string; height: string } = {
      width: `${width}px`,
      height: `${height}px`,
    };
    const d = direction.toString();
    if (isTopLeftResize(d)) {
      obj.top = `${newTop}px`;
      obj.left = `${newLeft}px`;
    } else if (d === '1,-1') {
      obj.top = `${newTop}px`;
    } else if (d === '-1,1') {
      obj.left = `${newLeft}px`;
    }
    Object.assign(s, obj);
  };

  const getGuideLines = (guides: GuidesInterface[], index: number) =>
    guides[index] && guides[index].getGuides().map((g) => g * ZOOM);

  const onClickMoveable = () => {
    setEditing(true);
    const ic = inputRef.current;
    if (!ic) return;
    ic.disabled = false;
    ic.focus();
    if (ic.type === 'file') {
      ic.click();
    } else {
      ic.setSelectionRange(ic.value.length, ic.value.length);
    }
  };

  return (
    <div
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setEditing(false);
      }}
      style={{ height: props.height }}
    >
      <Selecto
        container={paperRefs.current[pageCursor]}
        continueSelect={isPressShiftKey}
        onDragStart={(e) => {
          const { inputEvent } = e;
          const isMoveableElement = moveable.current?.isMoveableElement(inputEvent.target);
          if ((inputEvent.type === 'touchstart' && e.isTrusted) || isMoveableElement) {
            e.stop();
          }

          if (paperRefs.current[pageCursor] === inputEvent.target) {
            onEdit([]);
          }

          if (inputEvent.target.id === DELETE_BTN_ID) {
            removeSchemas(activeElements.map((ae) => ae.id));
          }
        }}
        onSelect={(e) => {
          onEdit(e.selected as HTMLElement[]);
        }}
      />
      <Paper
        paperRefs={paperRefs}
        scale={scale}
        size={size}
        schemasList={schemasList}
        pageSizes={pageSizes}
        backgrounds={backgrounds}
        renderPaper={({ index, paperSize }) => (
          <>
            {!editing && activeElements.length > 0 && (
              <DeleteButton activeElements={activeElements} />
            )}
            <Guides
              paperSize={paperSize}
              horizontalRef={(e) => {
                if (e) {
                  horizontalGuides.current[index] = e;
                }
              }}
              verticalRef={(e) => {
                if (e) {
                  verticalGuides.current[index] = e;
                }
              }}
            />
            {pageCursor !== index ? (
              <Mask
                width={paperSize.width + RULER_HEIGHT}
                height={paperSize.height + RULER_HEIGHT}
              />
            ) : (
              !editing && (
                <Moveable
                  ref={moveable}
                  target={activeElements}
                  bounds={{ left: 0, top: 0, bottom: paperSize.height, right: paperSize.width }}
                  horizontalGuidelines={getGuideLines(horizontalGuides.current, index)}
                  verticalGuidelines={getGuideLines(verticalGuides.current, index)}
                  keepRatio={isPressShiftKey}
                  onDrag={onDrag}
                  onDragEnd={onDragEnd}
                  onDragGroupEnd={onDragEnds}
                  onResize={onResize}
                  onResizeEnd={onResizeEnd}
                  onResizeGroupEnd={onResizeEnds}
                  onClick={onClickMoveable}
                />
              )
            )}
          </>
        )}
        renderSchema={({ schema }) => (
          <SchemaUI
            key={schema.key}
            schema={schema}
            onChangeHoveringSchemaId={onChangeHoveringSchemaId}
            editable={editing && activeElements.map((ae) => ae.id).includes(schema.id)}
            onChange={(value) => changeSchemas([{ key: 'data', value, schemaId: schema.id }])}
            border={hoveringSchemaId === schema.id ? '2px solid #18a0fb' : '1px dashed #4af'}
            ref={inputRef}
          />
        )}
      />
    </div>
  );
};
export default forwardRef<HTMLDivElement, Props>(Main);
