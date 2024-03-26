import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FileConfig } from './types';

/**
 * ファイル
 *
 * 画像のファイル情報やメタデータを取得することができる。ファイルの種類やサイズ、作成日時などの情報を取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-file
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
