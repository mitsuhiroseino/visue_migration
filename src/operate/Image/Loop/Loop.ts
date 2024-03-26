import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LoopConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Loopのコンフィグ
 * @returns gmのインスタンス
 */
const Loop: ImageManipulation<LoopConfig> = async (state, config) => {
  const { iterations } = config;
  return state.loop(iterations);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LOOP, Loop);
export default Loop;
