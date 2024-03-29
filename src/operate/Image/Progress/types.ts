import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Progress`の設定
 */
export type ProgressConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PROGRESS;
};
