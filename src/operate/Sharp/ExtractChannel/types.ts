import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`ExtractChannel`の設定
 */
export type ExtractChannelConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.EXTRACT_CHANNEL> & {
  channel: 0 | 1 | 2 | 3 | 'red' | 'green' | 'blue' | 'alpha';
};
