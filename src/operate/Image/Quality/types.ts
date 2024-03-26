import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Quality`の設定
 */
export type QualityConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.QUALITY;

  level: number;
};
