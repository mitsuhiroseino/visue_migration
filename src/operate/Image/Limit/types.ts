import { LimitType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Limit`の設定
 */
export type LimitConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LIMIT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LIMIT;

  // 操作固有の設定
  limitType: LimitType | string;
  val: string;
};
