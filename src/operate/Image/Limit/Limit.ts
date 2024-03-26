import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LimitConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Limitのコンフィグ
 * @returns gmのインスタンス
 */
const Limit: ImageManipulation<LimitConfig> = async (state, config) => {
  const { type, val } = config;
  return state.limit(type, val);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LIMIT, Limit);
export default Limit;
