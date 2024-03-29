import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Box`の設定
 */
export type BoxConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BOX> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BOX;

  // 操作固有の設定
  color: string;
};
