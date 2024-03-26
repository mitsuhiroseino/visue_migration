import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`SetFormat`の設定
 */
export type SetFormatConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SET_FORMAT;

  format: string;
};
