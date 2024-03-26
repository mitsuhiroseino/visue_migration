import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ContrastConfig } from './types';

/**
 * コントラスト
 *
 * 画像のコントラストを調整することができる。コントラストの調整により、画像の明るさと暗さの差を強調することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-contrast
 *
 * @param state gmのインスタンス(ステート)
 * @param config Contrastのコンフィグ
 * @returns gmのインスタンス
 */
const Contrast: ImageManipulation<ContrastConfig> = async (state, config) => {
  const { multiplier } = config;
  return state.contrast(multiplier);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CONTRAST, Contrast);
export default Contrast;
