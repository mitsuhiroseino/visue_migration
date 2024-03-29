import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DitherConfig } from './types';

/**
 * ノイズ
 * @param jimp Jimpのインスタンス
 * @param config Ditherのコンフィグ
 * @returns Jimpのインスタンス
 */
const Dither: ImageManipulation<DitherConfig> = async (jimp, config) => {
  const { callback } = config;
  return await jimp.dither565(callback);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DITHER, Dither);
export default Dither;
