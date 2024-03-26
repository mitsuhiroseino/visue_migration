import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { InvertConfig } from './types';

/**
 * 色の反転
 * @param jimp Jimpのインスタンス
 * @param config Invertのコンフィグ
 * @returns Jimpのインスタンス
 */
const Invert: JimpManipulation<InvertConfig> = async (jimp, config) => {
  const { callback } = config;
  return await jimp.invert(callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.INVERT, Invert);
export default Invert;
