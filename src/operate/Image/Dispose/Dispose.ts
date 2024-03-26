import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DisposeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Disposeのコンフィグ
 * @returns gmのインスタンス
 */
const Dispose: ImageManipulation<DisposeConfig> = async (state, config) => {
  const { method } = config;
  return state.dispose(method);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DISPOSE, Dispose);
export default Dispose;
