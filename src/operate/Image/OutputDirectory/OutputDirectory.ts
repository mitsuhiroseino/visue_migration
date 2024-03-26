import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OutputDirectoryConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config OutputDirectoryのコンフィグ
 * @returns gmのインスタンス
 */
const OutputDirectory: ImageManipulation<OutputDirectoryConfig> = async (state, config) => {
  const { directory } = config;
  return state.outputDirectory(directory);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.OUTPUT_DIRECTORY, OutputDirectory);
export default OutputDirectory;
