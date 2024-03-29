import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Composite`の設定
 */
export type CompositeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.COMPOSITE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.COMPOSITE;

  // 操作固有の設定
  changeImagePath: string;
  maskImagePath?: string;
};
