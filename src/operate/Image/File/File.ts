import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FileConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Fileのコンフィグ
 * @returns gmのインスタンス
 */
const File: ImageManipulation<FileConfig> = async (state, config) => {
  const { filename } = config;
  return state.file(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FILE, File);
export default File;
