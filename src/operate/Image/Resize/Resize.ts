import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ResizeConfig } from './types';

/**
 * リサイズ
 *
 * 画像のリサイズを行うことができる。画像のサイズを指定した幅や高さに変更する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-resize
 *
 * @param state gmのインスタンス(ステート)
 * @param config Resizeのコンフィグ
 * @returns gmのインスタンス
 */
const Resize: ImageManipulation<ResizeConfig> = async (state, config) => {
  const { width, height, option } = config;
  return state.resize(width, height, option);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RESIZE, Resize);
export default Resize;
