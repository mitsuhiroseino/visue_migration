import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Composite`の設定
 */
export type CompositeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COMPOSITE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COMPOSITE;

  // 操作固有の設定
  changeImagePath: string;
  maskImagePath?: string;
};
