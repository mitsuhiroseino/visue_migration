import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { NegateConfig } from './types';

/**
 * ネガ変換
 * @param sharp Sharpのインスタンス
 * @param config Negateのコンフィグ
 * @returns Sharpのインスタンス
 */
const Negate: Manipulation<NegateConfig> = async (sharp, config) => {
  const { negate, alpha } = config;
  let arg;
  if (negate != null) {
    arg = negate;
  } else if (alpha != null) {
    arg = { alpha };
  }
  return await sharp.negate(arg);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NEGATE, Negate);
export default Negate;
