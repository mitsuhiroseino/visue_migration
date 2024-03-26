import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`RawSize`の設定
 */
export type RawSizeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RAW_SIZE;

  width: number;
  height: number;
  offset?: number;
};
