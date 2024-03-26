import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`BorderColor`の設定
 */
export type BorderColorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BORDER_COLOR;

  color: string;
};
