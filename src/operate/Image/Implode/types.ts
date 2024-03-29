import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Implode`の設定
 */
export type ImplodeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.IMPLODE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.IMPLODE;

  // 操作固有の設定
  factor?: number;
};
