import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ProcessConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Processのコンフィグ
 * @returns gmのインスタンス
 */
const Process: ImageManipulation<ProcessConfig> = async (state, config) => {
  const { command } = config;
  return state.process(command);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PROCESS, Process);
export default Process;
