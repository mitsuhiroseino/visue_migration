import { GravityDirection } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Gravity`の設定
 */
export type GravityConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.GRAVITY> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GRAVITY;

  // 操作固有の設定
  direction: GravityDirection | string;
};
