import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ComposeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Composeのコンフィグ
 * @returns gmのインスタンス
 */
const Compose: ImageManipulation<ComposeConfig> = async (state, config) => {
  const { operator } = config;
  return state.compose(operator);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMPOSE, Compose);
export default Compose;
