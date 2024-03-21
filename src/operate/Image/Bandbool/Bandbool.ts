import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { BandboolConfig } from './types';

/**
 * 全チャンネルに対するビット演算
 * @param sharp Sharpのインスタンス
 * @param config Bandboolのコンフィグ
 * @returns Sharpのインスタンス
 */
const Bandbool: Manipulation<BandboolConfig> = async (sharp, config) => {
  const { boolOp } = config;
  return await sharp.bandbool(boolOp);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BANDBOOL, Bandbool);
export default Bandbool;
