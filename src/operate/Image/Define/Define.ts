import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DefineConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Defineのコンフィグ
 * @returns gmのインスタンス
 */
const Define: ImageManipulation<DefineConfig> = async (state, config) => {
  const { value } = config;
  return state.define(value);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DEFINE, Define);
export default Define;
