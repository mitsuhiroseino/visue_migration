import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SepiaConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Sepiaのコンフィグ
 * @returns gmのインスタンス
 */
const Sepia: ImageManipulation<SepiaConfig> = async (state, config) => {
  const {} = config;
  return state.sepia();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SEPIA, Sepia);
export default Sepia;
