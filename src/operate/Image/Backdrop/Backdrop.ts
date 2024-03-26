import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BackdropConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Backdropのコンフィグ
 * @returns gmのインスタンス
 */
const Backdrop: ImageManipulation<BackdropConfig> = async (state, config) => {
  const {} = config;
  return state.backdrop();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BACKDROP, Backdrop);
export default Backdrop;
