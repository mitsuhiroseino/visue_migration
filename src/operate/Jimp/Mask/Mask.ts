import Jimp from 'jimp';
import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { MaskConfig } from './types';

/**
 * マスク
 * @param jimp Jimpのインスタンス
 * @param config Maskのコンフィグ
 * @returns Jimpのインスタンス
 */
const Mask: JimpManipulation<MaskConfig> = async (jimp, config) => {
  const { src, x, y, callback } = config;
  const srcJimp = await Jimp.read(src);
  return await jimp.mask(srcJimp, x, y, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.MASK, Mask);
export default Mask;
