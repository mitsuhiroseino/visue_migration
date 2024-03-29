import { OperationMode } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Mode`の設定
 */
export type ModeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MODE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MODE;

  // 操作固有の設定
  mode: OperationMode | string;
};
