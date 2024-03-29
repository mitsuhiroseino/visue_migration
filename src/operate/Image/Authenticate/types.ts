import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Authenticate`の設定
 */
export type AuthenticateConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.AUTHENTICATE;

  password: string;
};
