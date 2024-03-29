import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Modulate`の設定
 */
export type ModulateConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MODULATE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MODULATE;

  // 操作固有の設定
  b: number;
  s?: number;
  h?: number;
};
