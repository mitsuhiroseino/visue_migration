import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SamplingFactorConfig } from './types';

/**
 * サンプリングファクター
 *
 * 画像のサンプリングファクターを設定することができる。サンプリングの精度や効率を調整する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-samplingFactor
 *
 * @param state gmのインスタンス(ステート)
 * @param config SamplingFactorのコンフィグ
 * @returns gmのインスタンス
 */
const SamplingFactor: ImageManipulation<SamplingFactorConfig> = async (state, config) => {
  const { horizontalFactor, verticalFactor } = config;
  return state.samplingFactor(horizontalFactor, verticalFactor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SAMPLING_FACTOR, SamplingFactor);
export default SamplingFactor;
