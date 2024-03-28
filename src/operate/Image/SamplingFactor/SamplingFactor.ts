import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SamplingFactorConfig } from './types';

/**
 * クロマサブサンプリング係数
 *
 * DPX、JPEG、MPEG、またはYUVエンコーダがクロマダウンサンプリングに使用するサンプリング係数を指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-samplingFactor
 *
 * @param state gmのインスタンス(ステート)
 * @param config SamplingFactorのコンフィグ
 * @returns gmのインスタンス
 */
const SamplingFactor: ImageManipulation<SamplingFactorConfig> = (state, config) => {
  const { horizontalFactor, verticalFactor } = config;
  return state.samplingFactor(horizontalFactor, verticalFactor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SAMPLING_FACTOR, SamplingFactor);
export default SamplingFactor;
