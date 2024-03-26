import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EmbossConfig } from './types';

/**
 * エンボス効果
 *
 * 画像に浮き出し効果を与えることができる。画像に立体感や質感を与えるのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-emboss
 *
 * @param state gmのインスタンス(ステート)
 * @param config Embossのコンフィグ
 * @returns gmのインスタンス
 */
const Emboss: ImageManipulation<EmbossConfig> = async (state, config) => {
  const { radius } = config;
  return state.emboss(radius);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EMBOSS, Emboss);
export default Emboss;
