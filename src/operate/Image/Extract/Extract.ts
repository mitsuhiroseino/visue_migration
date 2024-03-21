import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ExtractConfig } from './types';

/**
 * 領域の抽出
 * @param sharp Sharpのインスタンス
 * @param config Extractのコンフィグ
 * @returns Sharpのインスタンス
 */
const Extract: Manipulation<ExtractConfig> = async (sharp, config) => {
  const { region } = config;
  return await sharp.extract(region);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EXTRACT, Extract);
export default Extract;
