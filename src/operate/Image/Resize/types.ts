import { ResizeOption } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Resize`の設定
 */
export type ResizeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.RESIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RESIZE;

  // 操作固有の設定
  width: number;
  height?: number;
  option?: ResizeOption;
};
