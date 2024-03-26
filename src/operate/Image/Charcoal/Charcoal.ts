import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CharcoalConfig } from './types';

/**
 * 木炭効果
 *
 * 画像に木炭効果を適用することができる。木炭効果は、画像に粗い質感を与えるのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-charcoal
 *
 * @param state gmのインスタンス(ステート)
 * @param config Charcoalのコンフィグ
 * @returns gmのインスタンス
 */
const Charcoal: ImageManipulation<CharcoalConfig> = async (state, config) => {
  const { factor } = config;
  return state.charcoal(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CHARCOAL, Charcoal);
export default Charcoal;
