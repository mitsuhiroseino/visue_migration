import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FuzzConfig } from './types';

/**
 * ぼかし
 *
 * 画像の色の許容範囲を指定することができる。指定した色と近い色を同一視することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-fuzz
 *
 * @param state gmのインスタンス(ステート)
 * @param config Fuzzのコンフィグ
 * @returns gmのインスタンス
 */
const Fuzz: ImageManipulation<FuzzConfig> = (state, config) => {
  const { distance, percent } = config;
  return state.fuzz(distance, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FUZZ, Fuzz);
export default Fuzz;
