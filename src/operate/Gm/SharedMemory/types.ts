import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`SharedMemory`の設定
 */
export type SharedMemoryConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SHARED_MEMORY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SHARED_MEMORY;

  // 操作固有の設定
};
