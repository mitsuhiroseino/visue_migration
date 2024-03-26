import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NegativeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Negativeのコンフィグ
 * @returns gmのインスタンス
 */
const Negative: ImageManipulation<NegativeConfig> = async (state, config) => {
  const {} = config;
  return state.negative();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NEGATIVE, Negative);
export default Negative;
