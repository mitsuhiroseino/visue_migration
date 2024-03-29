import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Profile`の設定
 */
export type ProfileConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PROFILE;

  filename: string;
};
