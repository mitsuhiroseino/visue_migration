import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TransformConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Transformのコンフィグ
 * @returns gmのインスタンス
 */
const Transform: ImageManipulation<TransformConfig> = async (state, config) => {
  const { color } = config;
  return state.transform(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TRANSFORM, Transform);
export default Transform;
