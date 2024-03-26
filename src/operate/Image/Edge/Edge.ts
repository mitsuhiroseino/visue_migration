import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EdgeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Edgeのコンフィグ
 * @returns gmのインスタンス
 */
const Edge: ImageManipulation<EdgeConfig> = async (state, config) => {
  const { radius } = config;
  return state.edge(radius);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EDGE, Edge);
export default Edge;
