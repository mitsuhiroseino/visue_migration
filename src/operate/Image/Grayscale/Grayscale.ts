import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { GrayscaleConfig } from './types';

/**
 * グレースケール
 * @param sharp Sharpのインスタンス
 * @param config Grayscaleのコンフィグ
 * @returns Sharpのインスタンス
 */
const Grayscale: Manipulation<GrayscaleConfig> = async (sharp, config) => {
  const { grayscale } = config;
  return await sharp.grayscale(grayscale);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GRAYSCALE, Grayscale);
export default Grayscale;
