import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`In`の設定
 */
export type InConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.IN;

  customArguments: string[];
};
