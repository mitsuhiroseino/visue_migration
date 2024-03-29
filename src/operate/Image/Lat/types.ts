import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Lat`の設定
 */
export type LatConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LAT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LAT;

  // 操作固有の設定
  width: number;
  height: number;
  offset: number;
  percent?: boolean;
};
