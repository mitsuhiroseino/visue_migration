import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { PipelineColorspaceConfig } from './types';

/**
 * 後続処理の色空間の変更(実験的機能)
 * @param sharp Sharpのインスタンス
 * @param config PipelineColorspaceのコンフィグ
 * @returns Sharpのインスタンス
 */
const PipelineColorspace: SharpManipulation<PipelineColorspaceConfig> = async (sharp, config) => {
  const { colorspace } = config;
  return await sharp.pipelineColorspace(colorspace);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.PIPELINE_COLORSPACE, PipelineColorspace);
export default PipelineColorspace;
