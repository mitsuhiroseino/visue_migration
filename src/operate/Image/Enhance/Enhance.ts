import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EnhanceConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Enhanceのコンフィグ
 * @returns gmのインスタンス
 */
const Enhance: ImageManipulation<EnhanceConfig> = async (state, config) => {
  const {} = config;
  return state.enhance();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ENHANCE, Enhance);
export default Enhance;
