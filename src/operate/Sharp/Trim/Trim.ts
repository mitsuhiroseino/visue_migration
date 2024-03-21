import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { TrimConfig } from './types';

/**
 * 背景色を基準にしたトリミング
 * @param sharp Sharpのインスタンス
 * @param config Trimのコンフィグ
 * @returns Sharpのインスタンス
 */
const Trim: SharpManipulation<TrimConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.trim(options);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.TRIM, Trim);
export default Trim;
