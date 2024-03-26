import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Extent`の設定
 */
export type ExtentConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EXTENT;

  width: number;
  height: number;
  options?: string;
};
