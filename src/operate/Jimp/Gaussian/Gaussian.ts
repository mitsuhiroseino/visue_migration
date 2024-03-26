import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { GaussianConfig } from './types';

/**
 * ガウスぼかし
 * @param jimp Jimpのインスタンス
 * @param config Gaussianのコンフィグ
 * @returns Jimpのインスタンス
 */
const Gaussian: JimpManipulation<GaussianConfig> = async (jimp, config) => {
  const { radius, callback } = config;
  return await jimp.gaussian(radius, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.GAUSSIAN, Gaussian);
export default Gaussian;
