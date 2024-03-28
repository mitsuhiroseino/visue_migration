import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MotionBlurConfig } from './types';

/**
 * モーションブラー
 *
 * 画像にモーションブラー効果を追加することができる。画像の移動を模倣し、動きのある効果を与える。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-motionBlur
 *
 * @param state gmのインスタンス(ステート)
 * @param config MotionBlurのコンフィグ
 * @returns gmのインスタンス
 */
const MotionBlur: ImageManipulation<MotionBlurConfig> = (state, config) => {
  const { radius, sigma, angle } = config;
  return state.motionBlur(radius, sigma, angle);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MOTION_BLUR, MotionBlur);
export default MotionBlur;
