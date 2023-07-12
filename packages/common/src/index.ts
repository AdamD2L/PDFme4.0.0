import {
  DEFAULT_FONT_NAME,
  DEFAULT_FONT_SIZE,
  DEFAULT_ALIGNMENT,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_CHARACTER_SPACING,
  DEFAULT_FONT_COLOR,
  DEFAULT_TOLERANCE,
  DEFAULT_FONT_SIZE_ADJUSTMENT,
  DEFAULT_PT_TO_MM_RATIO,
  DEFAULT_PT_TO_PX_RATIO,
  BLANK_PDF,
  DEFAULT_FONT_VALUE,
} from './constants.js';
import { schemaTypes, isImageSchema, isBarcodeSchema, isTextSchema } from './type.js';
import type {
  Lang,
  Size,
  Alignment,
  SchemaType,
  BarCodeType,
  TextSchema,
  ImageSchema,
  BarcodeSchema,
  Schema,
  SchemaInputs,
  SchemaForUI,
  Font,
  BasePdf,
  Template,
  CommonProps,
  GeneratorOptions,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  PreviewReactProps,
  DesignerProps,
  DesignerReactProps,
} from './type.js';
import {
  getB64BasePdf,
  b64toUint8Array,
  getFallbackFontName,
  getDefaultFont,
  heightOfFontAtSize,
  checkFont,
  checkInputs,
  checkUIOptions,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  validateBarcodeInput,
} from './helper.js';
import { calculateDynamicFontSize } from './calculateDynamicFontSize.js';

export {
  DEFAULT_FONT_NAME,
  DEFAULT_FONT_SIZE,
  DEFAULT_ALIGNMENT,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_CHARACTER_SPACING,
  DEFAULT_FONT_COLOR,
  DEFAULT_TOLERANCE,
  DEFAULT_FONT_SIZE_ADJUSTMENT,
  DEFAULT_PT_TO_MM_RATIO,
  DEFAULT_PT_TO_PX_RATIO,
  BLANK_PDF,
  DEFAULT_FONT_VALUE,
  schemaTypes,
  isTextSchema,
  isImageSchema,
  isBarcodeSchema,
  getB64BasePdf,
  b64toUint8Array,
  getFallbackFontName,
  getDefaultFont,
  heightOfFontAtSize,
  checkFont,
  checkInputs,
  checkUIOptions,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  validateBarcodeInput,
  calculateDynamicFontSize,
};

export type {
  Lang,
  Size,
  Alignment,
  SchemaType,
  BarCodeType,
  TextSchema,
  ImageSchema,
  BarcodeSchema,
  Schema,
  SchemaInputs,
  SchemaForUI,
  Font,
  BasePdf,
  Template,
  CommonProps,
  GeneratorOptions,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  PreviewReactProps,
  DesignerProps,
  DesignerReactProps,
};
