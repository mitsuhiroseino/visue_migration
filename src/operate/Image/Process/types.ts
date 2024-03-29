import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Process`の設定
 */
export type ProcessConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.PROCESS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PROCESS;

  // 操作固有の設定
  command: string;
};
