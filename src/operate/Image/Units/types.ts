import { UnitType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Units`の設定
 */
export type UnitsConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.UNITS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.UNITS;

  // 操作固有の設定
  unitType: UnitType | string;
};
