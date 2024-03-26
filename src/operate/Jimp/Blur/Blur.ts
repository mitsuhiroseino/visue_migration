import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { BlurConfig } from './types';

/**
 * ぼかし
 * @param jimp Jimpのインスタンス
 * @param config Blurのコンフィグ
 * @returns Jimpのインスタンス
 */
const Blur: JimpManipulation<BlurConfig> = async (jimp, config) => {
  const { radius, callback } = config;
  return await jimp.blur(radius, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.BLUR, Blur);
export default Blur;
