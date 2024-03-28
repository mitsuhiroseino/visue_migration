import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { InterlaceConfig } from './types';

/**
 * インターレース
 *
 * 画像のインターレース形式を設定することができる。プログレッシブ表示やインターレース表示などの方法を指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-interlace
 *
 * @param state gmのインスタンス(ステート)
 * @param config Interlaceのコンフィグ
 * @returns gmのインスタンス
 */
const Interlace: ImageManipulation<InterlaceConfig> = (state, config) => {
  const { interlaceType } = config;
  return state.interlace(interlaceType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.INTERLACE, Interlace);
export default Interlace;
