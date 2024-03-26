import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DisplayConfig } from './types';

/**
 * 表示
 *
 * 画像を表示することができる。画像を表示するウィンドウやデバイスを指定して画像を表示する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-display
 *
 * @param state gmのインスタンス(ステート)
 * @param config Displayのコンフィグ
 * @returns gmのインスタンス
 */
const Display: ImageManipulation<DisplayConfig> = async (state, config) => {
  const { xServer } = config;
  return state.display(xServer);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DISPLAY, Display);
export default Display;
