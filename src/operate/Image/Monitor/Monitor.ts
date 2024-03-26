import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MonitorConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Monitorのコンフィグ
 * @returns gmのインスタンス
 */
const Monitor: ImageManipulation<MonitorConfig> = async (state, config) => {
  const {} = config;
  return state.monitor();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MONITOR, Monitor);
export default Monitor;
