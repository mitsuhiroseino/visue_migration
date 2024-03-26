import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ModeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Modeのコンフィグ
 * @returns gmのインスタンス
 */
const Mode: ImageManipulation<ModeConfig> = async (state, config) => {
  const { mode } = config;
  return state.mode(mode);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MODE, Mode);
export default Mode;
