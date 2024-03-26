import { LimitType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Limit`の設定
 */
export type LimitConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LIMIT;

  limitType: LimitType | string;
  val: string;
};
