import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Modulate`の設定
 */
export type ModulateConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MODULATE;

  b: number;
  s?: number;
  h?: number;
};
