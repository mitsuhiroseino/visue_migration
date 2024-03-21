import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ConvolveConfig } from './types';

/**
 * コンボリューション(平滑化、鮮鋭化、エッジ抽出)
 * @param sharp Sharpのインスタンス
 * @param config Convolveのコンフィグ
 * @returns Sharpのインスタンス
 */
const Convolve: Manipulation<ConvolveConfig> = async (sharp, config) => {
  const { kernel } = config;
  return await sharp.convolve(kernel);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CONVOLVE, Convolve);
export default Convolve;
