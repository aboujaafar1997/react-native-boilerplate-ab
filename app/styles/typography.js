/* eslint-disable import/no-cycle */
import { fontSize, scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Roboto-Regular';
export const FONT_FAMILY_MEDIUM = 'Roboto-Medium';
export const FONT_FAMILY_BOLD = 'Roboto-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '600';

// FONT SIZE
export const FONT_SIZE_38 = scaleFont(38);
export const FONT_SIZE_36 = scaleFont(36);
export const FONT_SIZE_34 = scaleFont(34);
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_30 = scaleFont(30);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_26 = scaleFont(26);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_10 = scaleFont(10);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_22 = scaleFont(22);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_18 = scaleFont(18);
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_12 = scaleFont(12);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_SIZE_XS = fontSize(18, 10);
export const FONT_SIZE_S = fontSize(20, 12);
export const FONT_SIZE_M = fontSize(22, 14);
export const FONT_SIZE_L = fontSize(24, 16);
export const FONT_SIZE_XL = fontSize(26, 18);
export const FONT_SIZE_XXL = fontSize(28, 20);

export const LINE_HEIGHT_XS = fontSize(18, 10);
export const LINE_HEIGHT_S = fontSize(20, 12);
export const LINE_HEIGHT_M = fontSize(22, 14);
export const LINE_HEIGHT_L = fontSize(24, 16);
export const LINE_HEIGHT_XL = fontSize(26, 18);
export const LINE_HEIGHT_XXL = fontSize(28, 20);
