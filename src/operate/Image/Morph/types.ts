import { WriteCallback } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Morph`の設定
 */
export type MorphConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MORPH> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MORPH;

  // 操作固有の設定
  otherImg: string | string[];
  outName: string;
  callback?: WriteCallback;
};
