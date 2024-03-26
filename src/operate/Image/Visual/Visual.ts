import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { VisualConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Visualのコンフィグ
 * @returns gmのインスタンス
 */
const Visual: ImageManipulation<VisualConfig> = async (state, config) => {
  const { type } = config;
  return state.visual(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.VISUAL, Visual);
export default Visual;
