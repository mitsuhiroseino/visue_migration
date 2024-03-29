import { HighlightStyle } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`HighlightStyle`の設定
 */
export type HighlightStyleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.HIGHLIGHT_STYLE;

  style: HighlightStyle | string;
};
