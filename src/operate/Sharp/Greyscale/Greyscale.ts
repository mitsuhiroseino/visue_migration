import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { GreyscaleConfig } from './types';

/**
 * グレースケール
 * @param sharp Sharpのインスタンス
 * @param config Greyscaleのコンフィグ
 * @returns Sharpのインスタンス
 */
const Greyscale: SharpManipulation<GreyscaleConfig> = async (sharp, config) => {
  const { greyscale } = config;
  return await sharp.greyscale(greyscale);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.GREYSCALE, Greyscale);
export default Greyscale;
