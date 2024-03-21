import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { PipelineColorspaceConfig } from './types';

/**
 * 後続処理の色空間の変更(実験的機能)
 * @param sharp Sharpのインスタンス
 * @param config PipelineColorspaceのコンフィグ
 * @returns Sharpのインスタンス
 */
const PipelineColorspace: Manipulation<PipelineColorspaceConfig> = async (sharp, config) => {
  const { colorspace } = config;
  return await sharp.pipelineColorspace(colorspace);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PIPELINE_COLORSPACE, PipelineColorspace);
export default PipelineColorspace;
