import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { NormaliseConfig } from './types';

/**
 * コントラスト補正
 * @param sharp Sharpのインスタンス
 * @param config Normaliseのコンフィグ
 * @returns Sharpのインスタンス
 */
const Normalise: Manipulation<NormaliseConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.normalise(options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NORMALISE, Normalise);
export default Normalise;
