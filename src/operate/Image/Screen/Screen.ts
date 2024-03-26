import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ScreenConfig } from './types';

/**
 * スクリーン
 *
 * 画像のスクリーン合成を行うことができる。画像を別の画像や背景と合成して表示する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-screen
 *
 * @param state gmのインスタンス(ステート)
 * @param config Screenのコンフィグ
 * @returns gmのインスタンス
 */
const Screen: ImageManipulation<ScreenConfig> = async (state, config) => {
  const {} = config;
  return state.screen();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SCREEN, Screen);
export default Screen;