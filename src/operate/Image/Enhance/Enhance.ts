import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EnhanceConfig } from './types';

/**
 * 鮮明度、色彩、コントラスト調整
 *
 * 画像の品質を向上させることができる。画像の鮮明度、色彩、コントラストなどを調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-enhance
 *
 * @param state gmのインスタンス(ステート)
 * @param config Enhanceのコンフィグ
 * @returns gmのインスタンス
 */
const Enhance: ImageManipulation<EnhanceConfig> = async (state, config) => {
  const {} = config;
  return state.enhance();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ENHANCE, Enhance);
export default Enhance;
