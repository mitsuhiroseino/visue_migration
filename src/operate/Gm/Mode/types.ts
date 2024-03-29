import { OperationMode } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Mode`の設定
 */
export type ModeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MODE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MODE;

  // 操作固有の設定
  mode: OperationMode | string;
};
