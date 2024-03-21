import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { GammaConfig } from './types';

/**
 * ガンマ補正
 * @param sharp Sharpのインスタンス
 * @param config Gammaのコンフィグ
 * @returns Sharpのインスタンス
 */
const Gamma: Manipulation<GammaConfig> = async (sharp, config) => {
  const { gamma, gammaOut } = config;
  return await sharp.gamma(gamma, gammaOut);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GAMMA, Gamma);
export default Gamma;
