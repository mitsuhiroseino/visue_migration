import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`RawSize`の設定
 */
export type RawSizeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.RAW_SIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RAW_SIZE;

  // 操作固有の設定
  width: number;
  height: number;
  offset?: number;
};
