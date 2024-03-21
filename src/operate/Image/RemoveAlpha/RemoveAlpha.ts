import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { RemoveAlphaConfig } from './types';

/**
 * 透明度の削除
 * @param sharp Sharpのインスタンス
 * @param config RemoveAlphaのコンフィグ
 * @returns Sharpのインスタンス
 */
const RemoveAlpha: Manipulation<RemoveAlphaConfig> = async (sharp, config) => {
  return await sharp.removeAlpha();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.REMOVE_ALPHA, RemoveAlpha);
export default RemoveAlpha;
