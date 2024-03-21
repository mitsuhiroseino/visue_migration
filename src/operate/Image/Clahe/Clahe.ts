import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ClaheConfig } from './types';

/**
 * 暗部の鮮明化
 * @param sharp Sharpのインスタンス
 * @param config Claheのコンフィグ
 * @returns Sharpのインスタンス
 */
const Clahe: Manipulation<ClaheConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.clahe(options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CLAHE, Clahe);
export default Clahe;
