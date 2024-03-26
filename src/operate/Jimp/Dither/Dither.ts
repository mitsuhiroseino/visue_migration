import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { DitherConfig } from './types';

/**
 * ノイズ
 * @param jimp Jimpのインスタンス
 * @param config Ditherのコンフィグ
 * @returns Jimpのインスタンス
 */
const Dither: JimpManipulation<DitherConfig> = async (jimp, config) => {
  const { callback } = config;
  return await jimp.dither565(callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.DITHER, Dither);
export default Dither;
