import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Rotate`の設定
 */
export type RotateConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ROTATE;

  backgroundColor: string;
  degrees: number;
};
