import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BlurConfig } from './types';

/**
 * ぼかし
 *
 * 画像にぼかしを適用することができる。これにより、画像のエッジが滑らかになり、ノイズが軽減される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-blur
 *
 * @param state gmのインスタンス(ステート)
 * @param config Blurのコンフィグ
 * @returns gmのインスタンス
 */
const Blur: ImageManipulation<BlurConfig> = (state, config) => {
  const { radius, sigma } = config;
  return state.blur(radius, sigma);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BLUR, Blur);
export default Blur;
