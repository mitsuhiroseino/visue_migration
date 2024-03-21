import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { EnsureAlphaConfig } from './types';

/**
 * 透明度の追加
 * @param sharp Sharpのインスタンス
 * @param config EnsureAlphaのコンフィグ
 * @returns Sharpのインスタンス
 */
const EnsureAlpha: Manipulation<EnsureAlphaConfig> = async (sharp, config) => {
  const { alpha } = config;
  return await sharp.ensureAlpha(alpha);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ENSURE_ALPHA, EnsureAlpha);
export default EnsureAlpha;
