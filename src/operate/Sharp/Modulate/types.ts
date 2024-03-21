import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Modulate`の設定
 */
export type ModulateConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.MODULATE;

  brightness?: number | undefined;
  saturation?: number | undefined;
  hue?: number | undefined;
  lightness?: number | undefined;
};
