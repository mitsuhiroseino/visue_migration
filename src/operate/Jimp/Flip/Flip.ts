import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { FlipConfig } from './types';

/**
 * 水平または垂直に反転する
 * @param jimp Jimpのインスタンス
 * @param config Flipのコンフィグ
 * @returns Jimpのインスタンス
 */
const Flip: JimpManipulation<FlipConfig> = async (jimp, config) => {
  const { horizontal, vertical, callback } = config;
  return await jimp.flip(horizontal, vertical, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.FLIP, Flip);
export default Flip;
