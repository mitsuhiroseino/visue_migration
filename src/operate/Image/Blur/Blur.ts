import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { BlurConfig } from './types';

/**
 * ぼかし
 * @param sharp Sharpのインスタンス
 * @param config Blurのコンフィグ
 * @returns Sharpのインスタンス
 */
const Blur: Manipulation<BlurConfig> = async (sharp, config) => {
  const { sigma } = config;
  return await sharp.blur(sigma);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BLUR, Blur);
export default Blur;
