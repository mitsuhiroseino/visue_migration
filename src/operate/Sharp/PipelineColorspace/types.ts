import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`PipelineColorspace`の設定
 */
export type PipelineColorspaceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.PIPELINE_COLORSPACE;

  colorspace?: string;
};
