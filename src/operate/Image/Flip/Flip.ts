import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FlipConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Flipのコンフィグ
 * @returns gmのインスタンス
 */
const Flip: ImageManipulation<FlipConfig> = async (state, config) => {
  const {} = config;
  return state.flip();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLIP, Flip);
export default Flip;
