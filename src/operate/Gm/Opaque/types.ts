import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Opaque`の設定
 */
export type OpaqueConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.OPAQUE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.OPAQUE;

  // 操作固有の設定
  color: string;
};
