import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { AffineConfig } from './types';

/**
 * 画像の変形
 * @param sharp Sharpのインスタンス
 * @param config Affineのコンフィグ
 * @returns Sharpのインスタンス
 */
const Affine: Manipulation<AffineConfig> = async (sharp, config) => {
  const { type, matrix, ...options } = config;
  return await sharp.affine(matrix, options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.AFFINE, Affine);
export default Affine;
