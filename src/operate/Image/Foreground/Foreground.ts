import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ForegroundConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Foregroundのコンフィグ
 * @returns gmのインスタンス
 */
const Foreground: ImageManipulation<ForegroundConfig> = async (state, config) => {
  const { color } = config;
  return state.foreground(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FOREGROUND, Foreground);
export default Foreground;
