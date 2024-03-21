import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { FlipConfig } from './types';

/**
 * 垂直方向 (上下) にミラーリング
 * @param sharp Sharpのインスタンス
 * @param config Flipのコンフィグ
 * @returns Sharpのインスタンス
 */
const Flip: Manipulation<FlipConfig> = async (sharp, config) => {
  const { flip } = config;
  return await sharp.flip(flip);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLIP, Flip);
export default Flip;
