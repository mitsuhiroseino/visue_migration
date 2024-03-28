import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SampleConfig } from './types';

/**
 * 拡大縮小
 *
 * ピクセルサンプリングを使用して画像を拡大縮小する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-sample
 *
 * @param state gmのインスタンス(ステート)
 * @param config Sampleのコンフィグ
 * @returns gmのインスタンス
 */
const Sample: ImageManipulation<SampleConfig> = (state, config) => {
  const { geometry } = config;
  return state.sample(geometry);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SAMPLE, Sample);
export default Sample;
