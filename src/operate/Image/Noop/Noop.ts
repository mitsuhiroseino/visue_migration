import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NoopConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Noopのコンフィグ
 * @returns gmのインスタンス
 */
const Noop: ImageManipulation<NoopConfig> = async (state, config) => {
  const {} = config;
  return state.noop();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NOOP, Noop);
export default Noop;
