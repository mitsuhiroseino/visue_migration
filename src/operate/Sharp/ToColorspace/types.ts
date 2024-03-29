import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`ToColorspace`の設定
 */
export type ToColorspaceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.TO_COLORSPACE;

  colorspace: string;
};
