import { ImageCallback } from '@jimp/core';
import { Font, PrintClass, PrintableText } from '@jimp/plugin-print';
import { JIMP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Print`の設定
 */
export type PrintConfig = {
  /**
   * 画像操作種別
   */
  type: typeof JIMP_MANIPULATION_TYPE.PRINT;

  font: Font;
  x: number;
  y: number;
  text: PrintableText;
  maxWidth?: number;
  maxHeight?: number;
  callback?: ImageCallback<PrintClass>;
};
