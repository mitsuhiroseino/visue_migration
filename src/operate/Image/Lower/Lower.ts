import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LowerConfig } from './types';

/**
 * 小文字化
 *
 * 画像の色の明るさを調整することができる。画像の全体的な明るさを調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-lower
 *
 * @param state gmのインスタンス(ステート)
 * @param config Lowerのコンフィグ
 * @returns gmのインスタンス
 */
const Lower: ImageManipulation<LowerConfig> = async (state, config) => {
  const { width, height } = config;
  return state.lower(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LOWER, Lower);
export default Lower;
