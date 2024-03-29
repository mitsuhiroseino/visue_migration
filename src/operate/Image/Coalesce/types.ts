import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Coalesce`の設定
 */
export type CoalesceConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COALESCE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COALESCE;

  // 操作固有の設定
};
