import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Map`の設定
 */
export type MapConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MAP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MAP;

  // 操作固有の設定
  filename: string;
};
