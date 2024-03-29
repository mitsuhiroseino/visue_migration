import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Label`の設定
 */
export type LabelConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LABEL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LABEL;

  // 操作固有の設定
  name: string;
};
