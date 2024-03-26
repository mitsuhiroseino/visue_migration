import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BorderConfig } from './types';

/**
 * 境界
 *
 * 画像に境界線を追加することができる。境界線は、画像の周囲にフレームを付けるのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-border
 *
 * @param state gmのインスタンス(ステート)
 * @param config Borderのコンフィグ
 * @returns gmのインスタンス
 */
const Border: ImageManipulation<BorderConfig> = async (state, config) => {
  const { width, height } = config;
  return state.border(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BORDER, Border);
export default Border;
