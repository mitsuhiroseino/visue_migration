import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ShadowConfig } from './types';

/**
 * シャドウ
 *
 * モンタージュに影を付ける。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-shadow
 *
 * @param state gmのインスタンス(ステート)
 * @param config Shadowのコンフィグ
 * @returns gmのインスタンス
 */
const Shadow: ImageManipulation<ShadowConfig> = async (state, config) => {
  const { radius, sigma } = config;
  return state.shadow(radius, sigma);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHADOW, Shadow);
export default Shadow;
