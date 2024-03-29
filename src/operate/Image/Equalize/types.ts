import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Equalize`の設定
 */
export type EqualizeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.EQUALIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EQUALIZE;

  // 操作固有の設定
};
