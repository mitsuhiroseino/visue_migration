import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`PipelineColourspace`の設定
 */
export type PipelineColourspaceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PIPELINE_COLOURSPACE;

  colourspace?: string;
};
