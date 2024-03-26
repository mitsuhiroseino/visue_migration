import { UnitType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Units`の設定
 */
export type UnitsConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.UNITS;

  unitType: UnitType | string;
};
