import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { MedianConfig } from './types';

/**
 * ノイズ除去
 * @param sharp Sharpのインスタンス
 * @param config Medianのコンフィグ
 * @returns Sharpのインスタンス
 */
const Median: Manipulation<MedianConfig> = async (sharp, config) => {
  const { size } = config;
  return await sharp.median(size);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MEDIAN, Median);
export default Median;
