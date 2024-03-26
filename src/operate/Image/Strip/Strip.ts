import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { StripConfig } from './types';

/**
 * ストリップ
 *
 * 画像からストリップ情報を取り除くことができる。画像ファイルからメタデータやコメントなどを取り除く。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-strip
 *
 * @param state gmのインスタンス(ステート)
 * @param config Stripのコンフィグ
 * @returns gmのインスタンス
 */
const Strip: ImageManipulation<StripConfig> = async (state, config) => {
  const {} = config;
  return state.strip();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.STRIP, Strip);
export default Strip;
