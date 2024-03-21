import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { LinearConfig } from './types';

/**
 * レベル調整
 * @param sharp Sharpのインスタンス
 * @param config Linearのコンフィグ
 * @returns Sharpのインスタンス
 */
const Linear: Manipulation<LinearConfig> = async (sharp, config) => {
  const { multiplier, offset } = config;
  return await sharp.linear(multiplier, offset);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LINEAR, Linear);
export default Linear;
