import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Blur`の設定
 */
export type BlurConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.BLUR> & {
  sigma?: number | boolean;
};
