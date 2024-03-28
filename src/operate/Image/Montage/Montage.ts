import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MontageConfig } from './types';

/**
 * モンタージュ
 *
 * 画像をモンタージュすることができる。複数の画像をタイル状に並べて1枚の画像にまとめる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-montage
 *
 * @param state gmのインスタンス(ステート)
 * @param config Montageのコンフィグ
 * @returns gmのインスタンス
 */
const Montage: ImageManipulation<MontageConfig> = (state, config) => {
  const { otherImg } = config;
  return state.montage(otherImg);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MONTAGE, Montage);
export default Montage;
