import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { MedianConfig } from './types';

/**
 * ノイズ除去
 * @param sharp Sharpのインスタンス
 * @param config Medianのコンフィグ
 * @returns Sharpのインスタンス
 */
const Median: SharpManipulation<MedianConfig> = async (sharp, config) => {
  const { size } = config;
  return await sharp.median(size);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.MEDIAN, Median);
export default Median;
