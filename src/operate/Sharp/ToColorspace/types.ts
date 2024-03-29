import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`ToColorspace`の設定
 */
export type ToColorspaceConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.TO_COLORSPACE> & {
  colorspace: string;
};
