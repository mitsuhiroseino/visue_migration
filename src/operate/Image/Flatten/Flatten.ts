import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { FlattenConfig } from './types';

/**
 * アルファチャンネルの削除
 * @param sharp Sharpのインスタンス
 * @param config Flattenのコンフィグ
 * @returns Sharpのインスタンス
 */
const Flatten: Manipulation<FlattenConfig> = async (sharp, config) => {
  const { flatten, background } = config;
  let arg;
  if (flatten != null) {
    arg = flatten;
  } else if (background != null) {
    arg = { background };
  }
  return await sharp.flatten(arg);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLATTEN, Flatten);
export default Flatten;
