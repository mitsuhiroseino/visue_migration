import { ComposeOperator } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Compose`の設定
 */
export type ComposeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.COMPOSE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.COMPOSE;

  // 操作固有の設定
  operator: ComposeOperator | string;
};
