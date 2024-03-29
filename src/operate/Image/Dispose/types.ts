import { DisposeMethod } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Dispose`の設定
 */
export type DisposeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DISPOSE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DISPOSE;

  // 操作固有の設定
  method: DisposeMethod | string;
};
