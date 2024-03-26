import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SpreadConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Spreadのコンフィグ
 * @returns gmのインスタンス
 */
const Spread: ImageManipulation<SpreadConfig> = async (state, config) => {
  const { amount } = config;
  return state.spread(amount);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SPREAD, Spread);
export default Spread;
