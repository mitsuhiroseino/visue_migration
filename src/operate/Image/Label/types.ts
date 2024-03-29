import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Label`の設定
 */
export type LabelConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LABEL;

  name: string;
};
