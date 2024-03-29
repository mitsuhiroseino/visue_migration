import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`ToColourspace`の設定
 */
export type ToColourspaceConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.TO_COLOURSPACE> & {
  colourspace?: string;
};
