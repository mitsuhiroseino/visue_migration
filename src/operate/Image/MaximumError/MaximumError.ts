import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MaximumErrorConfig } from './types';

/**
 * 最大誤差
 *
 * 画像処理における最大誤差を設定することができる。処理の精度や品質を調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-maximumError
 *
 * @param state gmのインスタンス(ステート)
 * @param config MaximumErrorのコンフィグ
 * @returns gmのインスタンス
 */
const MaximumError: ImageManipulation<MaximumErrorConfig> = async (state, config) => {
  const { limit } = config;
  return state.maximumError(limit);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MAXIMUM_ERROR, MaximumError);
export default MaximumError;
