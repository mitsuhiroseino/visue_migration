import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { TrimConfig } from './types';

/**
 * 背景色を基準にしたトリミング
 * @param sharp Sharpのインスタンス
 * @param config Trimのコンフィグ
 * @returns Sharpのインスタンス
 */
const Trim: Manipulation<TrimConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.trim(options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TRIM, Trim);
export default Trim;
