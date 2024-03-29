import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Ping`の設定
 */
export type PingConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.PING> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PING;

  // 操作固有の設定
};
