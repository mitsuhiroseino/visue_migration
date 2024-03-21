import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { RemoveAlphaConfig } from './types';

/**
 * 透明度の削除
 * @param sharp Sharpのインスタンス
 * @param config RemoveAlphaのコンフィグ
 * @returns Sharpのインスタンス
 */
const RemoveAlpha: SharpManipulation<RemoveAlphaConfig> = async (sharp, config) => {
  return await sharp.removeAlpha();
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.REMOVE_ALPHA, RemoveAlpha);
export default RemoveAlpha;
