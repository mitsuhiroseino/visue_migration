import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ScaleConfig } from './types';

/**
 * スケール
 *
 * 画像のスケーリングを行うことができる。画像のサイズを指定した倍率で拡大縮小する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-scale
 *
 * @param state gmのインスタンス(ステート)
 * @param config Scaleのコンフィグ
 * @returns gmのインスタンス
 */
const Scale: ImageManipulation<ScaleConfig> = (state, config) => {
  const { width, height } = config;
  return state.scale(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SCALE, Scale);
export default Scale;
