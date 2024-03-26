import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DisplayConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Displayのコンフィグ
 * @returns gmのインスタンス
 */
const Display: ImageManipulation<DisplayConfig> = async (state, config) => {
  const { xServer } = config;
  return state.display(xServer);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DISPLAY, Display);
export default Display;
