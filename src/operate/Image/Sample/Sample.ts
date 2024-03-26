import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SampleConfig } from './types';

/**
 * サンプル
 *
 * 画像のサンプリングを行うことができる。画像の一部をサンプリングして取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-sample
 *
 * @param state gmのインスタンス(ステート)
 * @param config Sampleのコンフィグ
 * @returns gmのインスタンス
 */
const Sample: ImageManipulation<SampleConfig> = async (state, config) => {
  const { geometry } = config;
  return state.sample(geometry);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SAMPLE, Sample);
export default Sample;
