import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Equalize`の設定
 */
export type EqualizeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EQUALIZE;
};
