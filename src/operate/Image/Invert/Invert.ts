import ImageManipulationFactory from '../ImageManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { InvertConfig } from './types';

/**
 * 色の反転
 * @param jimp Jimpのインスタンス
 * @param config Invertのコンフィグ
 * @returns Jimpのインスタンス
 */
const Invert: ImageManipulation<InvertConfig> = async (jimp, config) => {
  const { callback } = config;
  return await jimp.invert(callback);
};
ImageManipulationFactory.register(JIMP_MANIPULATION_TYPE.INVERT, Invert);
export default Invert;
