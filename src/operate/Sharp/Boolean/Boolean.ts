import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { BooleanConfig } from './types';

/**
 * 指定画像とのビット演算(マスキングなどが可能)
 * @param sharp Sharpのインスタンス
 * @param config Booleanのコンフィグ
 * @returns Sharpのインスタンス
 */
const Boolean: SharpManipulation<BooleanConfig> = async (sharp, config) => {
  const { operand, operator, raw } = config;
  let options;
  if (raw) {
    options = { raw };
  }
  return await sharp.boolean(operand, operator, options);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.BOOLEAN, Boolean);
export default Boolean;
