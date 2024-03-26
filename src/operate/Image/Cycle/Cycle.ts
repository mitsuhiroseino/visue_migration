import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CycleConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Cycleのコンフィグ
 * @returns gmのインスタンス
 */
const Cycle: ImageManipulation<CycleConfig> = async (state, config) => {
  const { amount } = config;
  return state.cycle(amount);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CYCLE, Cycle);
export default Cycle;
