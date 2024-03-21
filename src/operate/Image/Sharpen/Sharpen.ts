import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { SharpenConfig } from './types';

/**
 * 鮮明化
 * @param sharp Sharpのインスタンス
 * @param config Sharpenのコンフィグ
 * @returns Sharpのインスタンス
 */
const Sharpen: Manipulation<SharpenConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.sharpen(options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHARPEN, Sharpen);
export default Sharpen;
