import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { NegateConfig } from './types';

/**
 * ネガ変換
 * @param sharp Sharpのインスタンス
 * @param config Negateのコンフィグ
 * @returns Sharpのインスタンス
 */
const Negate: SharpManipulation<NegateConfig> = (sharp, config) => {
  const { negate, alpha } = config;
  let arg;
  if (negate != null) {
    arg = negate;
  } else if (alpha != null) {
    arg = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.AFFINE> & { alpha };
  }
  return sharp.negate(arg);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.NEGATE, Negate);
export default Negate;
