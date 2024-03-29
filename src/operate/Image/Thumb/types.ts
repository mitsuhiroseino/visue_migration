import { WriteCallback } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Thumb`の設定
 */
export type ThumbConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.THUMB> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.THUMB;

  // 操作固有の設定
  width: number;
  height: number;
  outName: string;
  quality?: number;
  align?: 'topleft' | 'center' | string;
  callback: WriteCallback;
};
