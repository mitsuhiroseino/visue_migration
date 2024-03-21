import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { PipelineColourspaceConfig } from './types';

/**
 * 後続処理の色空間の変更(実験的機能)
 * @param sharp Sharpのインスタンス
 * @param config PipelineColourspaceのコンフィグ
 * @returns Sharpのインスタンス
 */
const PipelineColourspace: Manipulation<PipelineColourspaceConfig> = async (sharp, config) => {
  const { colourspace } = config;
  return await sharp.pipelineColourspace(colourspace);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PIPELINE_COLOURSPACE, PipelineColourspace);
export default PipelineColourspace;
