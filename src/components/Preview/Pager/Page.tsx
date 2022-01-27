import React, { useContext } from 'react';
import styles from './index.module.scss';
import left from '../../../assets/icons/left.svg';
import right from '../../../assets/icons/right.svg';
import doubleLeft from '../../../assets/icons/double-left.svg';
import doubleRight from '../../../assets/icons/double-right.svg';
import { I18nContext } from '../../../libs/contexts';

type Props = {
  pageCursor: number;
  pageNum: number;
  setPageCursor: (page: number) => void;
};

const Pager = ({ pageCursor, pageNum, setPageCursor }: Props) => {
  const i18n = useContext(I18nContext);

  if (pageNum <= 1) return <></>;

  return (
    <div className={`${styles.pageWrapper}`}>
      <div>
        <button
          className={styles.leftBtn}
          disabled={pageCursor <= 0}
          onClick={() => setPageCursor(0)}
        >
          <img src={doubleLeft} alt={i18n('goToFirst')} style={{ width: 20 }} />
        </button>
        <button
          className={styles.leftBtn}
          disabled={pageCursor <= 0}
          onClick={() => setPageCursor(pageCursor - 1)}
        >
          <img src={left} alt={i18n('goToPrevious')} style={{ width: 20 }} />
        </button>
        <strong style={{ color: 'white' }}>
          {pageCursor + 1}/{pageNum}
        </strong>
        <button
          className={styles.rightBtn}
          disabled={pageCursor + 1 >= pageNum}
          onClick={() => setPageCursor(pageCursor + 1)}
        >
          <img src={right} alt={i18n('goToNext')} style={{ width: 20 }} />
        </button>
        <button
          className={styles.rightBtn}
          disabled={pageCursor + 1 >= pageNum}
          onClick={() => setPageCursor(pageNum - 1)}
        >
          <img src={doubleRight} alt={i18n('goToFirst')} style={{ width: 20 }} />
        </button>
      </div>
    </div>
  );
};

export default Pager;
