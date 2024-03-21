import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { ExtractConfig } from './types';

/**
 * 領域の抽出
 * @param sharp Sharpのインスタンス
 * @param config Extractのコンフィグ
 * @returns Sharpのインスタンス
 */
const Extract: SharpManipulation<ExtractConfig> = async (sharp, config) => {
  const { region } = config;
  return await sharp.extract(region);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.EXTRACT, Extract);
export default Extract;
