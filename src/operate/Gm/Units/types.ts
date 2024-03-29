import { UnitType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Units`の設定
 */
export type UnitsConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.UNITS> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.UNITS;

  // 操作固有の設定
  unitType: UnitType | string;
};
