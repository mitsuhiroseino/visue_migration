import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LowerConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Lowerのコンフィグ
 * @returns gmのインスタンス
 */
const Lower: ImageManipulation<LowerConfig> = async (state, config) => {
  const { width, height } = config;
  return state.lower(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LOWER, Lower);
export default Lower;
