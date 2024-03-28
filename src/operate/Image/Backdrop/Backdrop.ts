import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BackdropConfig } from './types';

/**
 * 背景画像
 *
 * 画像の背景を指定した画像に設定することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-backdrop
 *
 * @param state gmのインスタンス(ステート)
 * @param config Backdropのコンフィグ
 * @returns gmのインスタンス
 */
const Backdrop: ImageManipulation<BackdropConfig> = (state, config) => {
  const {} = config;
  return state.backdrop();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BACKDROP, Backdrop);
export default Backdrop;
