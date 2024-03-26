import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { NormalizeConfig } from './types';

/**
 * 色の正規化
 * @param jimp Jimpのインスタンス
 * @param config Normalizeのコンフィグ
 * @returns Jimpのインスタンス
 */
const Normalize: JimpManipulation<NormalizeConfig> = async (jimp, config) => {
  const { callback } = config;
  return await jimp.normalize(callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.NORMALIZE, Normalize);
export default Normalize;
