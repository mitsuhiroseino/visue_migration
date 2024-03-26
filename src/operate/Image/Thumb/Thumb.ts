import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ThumbConfig } from './types';

/**
 * サムネイル
 *
 * 画像のサムネイルを生成することができる。指定したサイズに縮小して画像を生成する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-thumb
 *
 * @param state gmのインスタンス(ステート)
 * @param config Thumbのコンフィグ
 * @returns gmのインスタンス
 */
const Thumb: ImageManipulation<ThumbConfig> = async (state, config) => {
  const { width, height, outName, quality, align, callback } = config;
  return state.thumb(width, height, outName, quality, align, callback);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.THUMB, Thumb);
export default Thumb;
