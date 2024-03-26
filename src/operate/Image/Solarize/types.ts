import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Solarize`の設定
 */
export type SolarizeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SOLARIZE;

  threshold: number;
};
