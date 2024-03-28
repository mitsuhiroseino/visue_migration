import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FrameConfig } from './types';

/**
 * 枠線追加
 *
 * 画像に枠線を追加することができる。指定した色や太さで画像を枠で囲む。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-frame
 *
 * @param state gmのインスタンス(ステート)
 * @param config Frameのコンフィグ
 * @returns gmのインスタンス
 */
const Frame: ImageManipulation<FrameConfig> = (state, config) => {
  const { width, height, outerBevelWidth, outBevelHeight } = config;
  return state.frame(width, height, outerBevelWidth, outBevelHeight);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FRAME, Frame);
export default Frame;
