import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Displace`の設定
 */
export type DisplaceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DISPLACE;

  horizontal: number;
  vertical: number;
};
