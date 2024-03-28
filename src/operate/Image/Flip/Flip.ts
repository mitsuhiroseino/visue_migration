import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FlipConfig } from './types';

/**
 * 上下反転
 *
 * 画像を上下に反転させることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-flip
 *
 * @param state gmのインスタンス(ステート)
 * @param config Flipのコンフィグ
 * @returns gmのインスタンス
 */
const Flip: ImageManipulation<FlipConfig> = (state, config) => {
  const {} = config;
  return state.flip();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLIP, Flip);
export default Flip;
