import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OutputDirectoryConfig } from './types';

/**
 * 出力ディレクトリ
 *
 * 処理した画像を出力するディレクトリを指定することができる。画像の出力先を指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-outputDirectory
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
