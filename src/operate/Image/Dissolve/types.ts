import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Dissolve`の設定
 */
export type DissolveConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DISSOLVE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DISSOLVE;

  // 操作固有の設定
  percent: number;
};
