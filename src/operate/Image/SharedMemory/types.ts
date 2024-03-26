import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`SharedMemory`の設定
 */
export type SharedMemoryConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHARED_MEMORY;
};
