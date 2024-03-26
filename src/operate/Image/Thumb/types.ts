import { WriteCallback } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Thumb`の設定
 */
export type ThumbConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.THUMB;

  width: number;
  height: number;
  outName: string;
  quality?: number;
  align?: 'topleft' | 'center' | string;
  callback: WriteCallback;
};
