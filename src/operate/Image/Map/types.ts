import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Map`の設定
 */
export type MapConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MAP;

  filename: string;
};
