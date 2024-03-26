import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DeconstructConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Deconstructのコンフィグ
 * @returns gmのインスタンス
 */
const Deconstruct: ImageManipulation<DeconstructConfig> = async (state, config) => {
  const {} = config;
  return state.deconstruct();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DECONSTRUCT, Deconstruct);
export default Deconstruct;
