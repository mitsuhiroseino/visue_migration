import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SharpenConfig } from './types';

/**
 * シャープ化
 *
 * 画像をシャープにすることができる。画像の輪郭や細部を強調することで、鮮明さを向上させる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-sharpen
 *
 * @param state gmのインスタンス(ステート)
 * @param config Sharpenのコンフィグ
 * @returns gmのインスタンス
 */
const Sharpen: ImageManipulation<SharpenConfig> = (state, config) => {
  const { radius, sigma } = config;
  return state.sharpen(radius, sigma);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHARPEN, Sharpen);
export default Sharpen;
