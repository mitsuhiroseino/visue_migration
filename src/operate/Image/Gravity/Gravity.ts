import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { GravityConfig } from './types';

/**
 * 画像揃え基準点指定
 *
 * 画像の揃える基準点を指定することができる。画像の配置や重心を制御するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-gravity
 *
 * @param state gmのインスタンス(ステート)
 * @param config Gravityのコンフィグ
 * @returns gmのインスタンス
 */
const Gravity: ImageManipulation<GravityConfig> = (state, config) => {
  const { direction } = config;
  return state.gravity(direction);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GRAVITY, Gravity);
export default Gravity;
