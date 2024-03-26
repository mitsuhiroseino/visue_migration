import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LogConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Logのコンフィグ
 * @returns gmのインスタンス
 */
const Log: ImageManipulation<LogConfig> = async (state, config) => {
  const { format } = config;
  return state.log(format);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LOG, Log);
export default Log;
