import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { FlopConfig } from './types';

/**
 * 水平方向 (左右) にミラーリング
 * @param sharp Sharpのインスタンス
 * @param config Flopのコンフィグ
 * @returns Sharpのインスタンス
 */
const Flop: Manipulation<FlopConfig> = async (sharp, config) => {
  const { flop } = config;
  return await sharp.flop(flop);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLOP, Flop);
export default Flop;
