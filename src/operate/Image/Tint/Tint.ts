import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { TintConfig } from './types';

/**
 * 着色
 * @param sharp Sharpのインスタンス
 * @param config Tintのコンフィグ
 * @returns Sharpのインスタンス
 */
const Tint: Manipulation<TintConfig> = async (sharp, config) => {
  const { tint } = config;
  return await sharp.tint(tint);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TINT, Tint);
export default Tint;
