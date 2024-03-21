import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { RecombConfig } from './types';

/**
 * マトリクスで組み替え
 * @param sharp Sharpのインスタンス
 * @param config Recombのコンフィグ
 * @returns Sharpのインスタンス
 */
const Recomb: Manipulation<RecombConfig> = async (sharp, config) => {
  const { inputMatrix } = config;
  return await sharp.recomb(inputMatrix);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RECOMB, Recomb);
export default Recomb;
