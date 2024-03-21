import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { GreyscaleConfig } from './types';

/**
 * グレースケール
 * @param sharp Sharpのインスタンス
 * @param config Greyscaleのコンフィグ
 * @returns Sharpのインスタンス
 */
const Greyscale: Manipulation<GreyscaleConfig> = async (sharp, config) => {
  const { greyscale } = config;
  return await sharp.greyscale(greyscale);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GREYSCALE, Greyscale);
export default Greyscale;
