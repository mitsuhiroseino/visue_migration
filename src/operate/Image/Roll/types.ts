import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Roll`の設定
 */
export type RollConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ROLL;

  horizontal: number;
  vertical: number;
};
