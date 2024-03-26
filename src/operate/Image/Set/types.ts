import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Set`の設定
 */
export type SetConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SET;

  attribute: string;
  value: string;
};
