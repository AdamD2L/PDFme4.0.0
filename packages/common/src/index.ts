import {
  DEFAULT_FONT_NAME,
  DEFAULT_FONT_SIZE,
  DEFAULT_ALIGNMENT,
  VERTICAL_ALIGN_TOP,
  VERTICAL_ALIGN_MIDDLE,
  VERTICAL_ALIGN_BOTTOM,
  DEFAULT_VERTICAL_ALIGNMENT,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_CHARACTER_SPACING,
  DEFAULT_FONT_COLOR,
  DEFAULT_BARCODE_BG_COLOR,
  DEFAULT_BARCODE_COLOR,
  DYNAMIC_FIT_VERTICAL,
  DYNAMIC_FIT_HORIZONTAL,
  DEFAULT_DYNAMIC_FIT,
  FONT_SIZE_ADJUSTMENT,
  MM_TO_PT_RATIO,
  PT_TO_MM_RATIO,
  PT_TO_PX_RATIO,
  BLANK_PDF,
  DEFAULT_FONT_VALUE,
} from './constants.js';
import { schemaTypes, isImageSchema, isBarcodeSchema, isTextSchema } from './type.js';
import type {
  FontWidthCalcValues,
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
  checkInputs,
  checkUIOptions,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  mm2pt,
  pt2px,
  validateBarcodeInput,
} from './helper.js';
import {
  calculateDynamicFontSize,
  getFallbackFontName,
  getDefaultFont,
  heightOfFontAtSize,
  widthOfTextAtSize,
  checkFont,
  getFontKitFont,
  getBrowserVerticalFontAdjustments,
  getFontDescentInPt,
  getSplittedLines,
} from './font.js';

export {
  DEFAULT_FONT_NAME,
  DEFAULT_FONT_SIZE,
  DEFAULT_ALIGNMENT,
  VERTICAL_ALIGN_TOP,
  VERTICAL_ALIGN_MIDDLE,
  VERTICAL_ALIGN_BOTTOM,
  DEFAULT_VERTICAL_ALIGNMENT,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_CHARACTER_SPACING,
  DEFAULT_FONT_COLOR,
  DEFAULT_BARCODE_BG_COLOR,
  DEFAULT_BARCODE_COLOR,
  DYNAMIC_FIT_VERTICAL,
  DYNAMIC_FIT_HORIZONTAL,
  DEFAULT_DYNAMIC_FIT,
  FONT_SIZE_ADJUSTMENT,
  MM_TO_PT_RATIO,
  PT_TO_MM_RATIO,
  PT_TO_PX_RATIO,
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
  getSplittedLines,
  heightOfFontAtSize,
  widthOfTextAtSize,
  mm2pt,
  pt2px,
  checkFont,
  getBrowserVerticalFontAdjustments,
  getFontDescentInPt,
  getFontKitFont,
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
  FontWidthCalcValues,
};
