import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ThresholdConfig } from './types';

/**
 * しきい値処理(白黒化など)
 * @param sharp Sharpのインスタンス
 * @param config Thresholdのコンフィグ
 * @returns Sharpのインスタンス
 */
const Threshold: Manipulation<ThresholdConfig> = async (sharp, config) => {
  const { type, threshold, ...options } = config;
  return await sharp.threshold(threshold, options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.THRESHOLD, Threshold);
export default Threshold;
