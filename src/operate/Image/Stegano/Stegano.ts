import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SteganoConfig } from './types';

/**
 * 透かし非表示
 *
 * 画像内の透かしを非表示にする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-stegano
 *
 * @param state gmのインスタンス(ステート)
 * @param config Steganoのコンフィグ
 * @returns gmのインスタンス
 */
const Stegano: ImageManipulation<SteganoConfig> = (state, config) => {
  const { offset } = config;
  return state.stegano(offset);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.STEGANO, Stegano);
export default Stegano;
