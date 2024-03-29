import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Shade`の設定
 */
export type ShadeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHADE;

  azimuth: number;
  elevation: number;
};
