import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`ToColourspace`の設定
 */
export type ToColourspaceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TO_COLOURSPACE;

  colourspace?: string;
};
