import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { BandboolConfig } from './types';

/**
 * 全チャンネルに対するビット演算
 * @param sharp Sharpのインスタンス
 * @param config Bandboolのコンフィグ
 * @returns Sharpのインスタンス
 */
const Bandbool: SharpManipulation<BandboolConfig> = async (sharp, config) => {
  const { boolOp } = config;
  return await sharp.bandbool(boolOp);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.BANDBOOL, Bandbool);
export default Bandbool;
