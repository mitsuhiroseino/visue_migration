import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`PipelineColorspace`の設定
 */
export type PipelineColorspaceConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.PIPELINE_COLORSPACE> & {
  colorspace?: string;
};
