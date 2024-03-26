import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { WindowConfig } from './types';

/**
 * ウィンドウ
 *
 * 画像のウィンドウ情報を取得することができる。画像のウィンドウ位置やサイズなどを取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-window
 *
 * @param state gmのインスタンス(ステート)
 * @param config Windowのコンフィグ
 * @returns gmのインスタンス
 */
const Window: ImageManipulation<WindowConfig> = async (state, config) => {
  const { id } = config;
  return state.window(id);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.WINDOW, Window);
export default Window;
