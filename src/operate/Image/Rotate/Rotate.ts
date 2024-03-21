import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { RotateConfig } from './types';

/**
 * 回転
 * @param sharp Sharpのインスタンス
 * @param config Rotateのコンフィグ
 * @returns Sharpのインスタンス
 */
const Rotate: Manipulation<RotateConfig> = async (sharp, config) => {
  const { type, angle, ...options } = config;
  return await sharp.rotate(angle, options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ROTATE, Rotate);
export default Rotate;
