import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { UnflattenConfig } from './types';

/**
 * 白い部分の透過(実験的機能)
 * @param sharp Sharpのインスタンス
 * @param config Unflattenのコンフィグ
 * @returns Sharpのインスタンス
 */
const Unflatten: SharpManipulation<UnflattenConfig> = async (sharp, config) => {
  return await sharp.unflatten();
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.UNFLATTEN, Unflatten);
export default Unflatten;
