import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ScreenConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Screenのコンフィグ
 * @returns gmのインスタンス
 */
const Screen: ImageManipulation<ScreenConfig> = async (state, config) => {
  const {} = config;
  return state.screen();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SCREEN, Screen);
export default Screen;
