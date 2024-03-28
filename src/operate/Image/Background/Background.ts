import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BackgroundConfig } from './types';

/**
 * 背景色
 *
 * 背景を設定することができる。画像に背景色を追加する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-background
 *
 * @param state gmのインスタンス(ステート)
 * @param config Backgroundのコンフィグ
 * @returns gmのインスタンス
 */
const Background: ImageManipulation<BackgroundConfig> = (state, config) => {
  const { color } = config;
  return state.background(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BACKGROUND, Background);
export default Background;
