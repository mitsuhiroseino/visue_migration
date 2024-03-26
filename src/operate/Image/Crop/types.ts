import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Crop`の設定
 */
export type CropConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CROP;

  width: number;
  height: number;
  x?: number;
  y?: number;
  percent?: boolean;
};
