import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Resample`の設定
 */
export type ResampleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RESAMPLE;

  horizontal: number;
  vertical: number;
};
