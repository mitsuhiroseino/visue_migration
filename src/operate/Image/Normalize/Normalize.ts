import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { NormalizeConfig } from './types';

/**
 * コントラスト補正
 * @param sharp Sharpのインスタンス
 * @param config Normalizeのコンフィグ
 * @returns Sharpのインスタンス
 */
const Normalize: Manipulation<NormalizeConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.normalize(options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NORMALIZE, Normalize);
export default Normalize;
