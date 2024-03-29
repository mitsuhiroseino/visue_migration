import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Shave`の設定
 */
export type ShaveConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SHAVE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHAVE;

  // 操作固有の設定
  width: number;
  height: number;
  percent?: boolean;
};
