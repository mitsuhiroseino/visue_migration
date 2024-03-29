import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Displace`の設定
 */
export type DisplaceConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DISPLACE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DISPLACE;

  // 操作固有の設定
  horizontal: number;
  vertical: number;
};
