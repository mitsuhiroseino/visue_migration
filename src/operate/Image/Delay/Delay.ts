import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DelayConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Delayのコンフィグ
 * @returns gmのインスタンス
 */
const Delay: ImageManipulation<DelayConfig> = async (state, config) => {
  const { centiseconds } = config;
  return state.delay(centiseconds);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DELAY, Delay);
export default Delay;
