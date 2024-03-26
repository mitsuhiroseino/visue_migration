import { GravityDirection } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Gravity`の設定
 */
export type GravityConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GRAVITY;

  direction: GravityDirection | string;
};
