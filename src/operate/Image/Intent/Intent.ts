import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { IntentConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Intentのコンフィグ
 * @returns gmのインスタンス
 */
const Intent: ImageManipulation<IntentConfig> = async (state, config) => {
  const { type } = config;
  return state.intent(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.INTENT, Intent);
export default Intent;
