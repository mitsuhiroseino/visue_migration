import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CreateDirectoriesConfig } from './types';

/**
 * ディレクトリの作成
 *
 * 指定されたパスにディレクトリを作成することができる。ディレクトリが存在しない場合は、自動的に作成される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-createDirectories
 *
 * @param state gmのインスタンス(ステート)
 * @param config CreateDirectoriesのコンフィグ
 * @returns gmのインスタンス
 */
const CreateDirectories: ImageManipulation<CreateDirectoriesConfig> = async (state, config) => {
  const {} = config;
  return state.createDirectories();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CREATE_DIRECTORIES, CreateDirectories);
export default CreateDirectories;
