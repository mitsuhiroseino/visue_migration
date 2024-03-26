import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RandomThresholdConfig } from './types';

/**
 * ランダムしきい値
 *
 * 画像のランダムしきい値処理を行うことができる。ランダムなしきい値を使用して、画像を二値化する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-randomThreshold
 *
 * @param state gmのインスタンス(ステート)
 * @param config RandomThresholdのコンフィグ
 * @returns gmのインスタンス
 */
const RandomThreshold: ImageManipulation<RandomThresholdConfig> = async (state, config) => {
  const { channelType, LOWxHIGH } = config;
  return state.randomThreshold(channelType, LOWxHIGH);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RANDOM_THRESHOLD, RandomThreshold);
export default RandomThreshold;
