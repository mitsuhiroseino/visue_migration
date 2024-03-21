import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { UnflattenConfig } from './types';

/**
 * 白い部分の透過(実験的機能)
 * @param sharp Sharpのインスタンス
 * @param config Unflattenのコンフィグ
 * @returns Sharpのインスタンス
 */
const Unflatten: Manipulation<UnflattenConfig> = async (sharp, config) => {
  return await sharp.unflatten();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.UNFLATTEN, Unflatten);
export default Unflatten;
