import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ImplodeConfig } from './types';

/**
 * 内側に収縮
 *
 * 画像を内側に収縮させることができる。画像を中心点を基準に収縮することで、効果的な視覚的効果を得ることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-implode
 *
 * @param state gmのインスタンス(ステート)
 * @param config Implodeのコンフィグ
 * @returns gmのインスタンス
 */
const Implode: ImageManipulation<ImplodeConfig> = (state, config) => {
  const { factor } = config;
  return state.implode(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.IMPLODE, Implode);
export default Implode;
