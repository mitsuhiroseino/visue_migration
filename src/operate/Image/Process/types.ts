import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Process`の設定
 */
export type ProcessConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PROCESS;

  command: string;
};
