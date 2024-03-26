import { VisualType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Visual`の設定
 */
export type VisualConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.VISUAL;

  visualType: VisualType | string;
};
