import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Affine`の設定
 */
export type AffineConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.AFFINE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.AFFINE;

  // 操作固有の設定
  matrix: string;
};
