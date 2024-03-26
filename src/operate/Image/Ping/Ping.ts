import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PingConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Pingのコンフィグ
 * @returns gmのインスタンス
 */
const Ping: ImageManipulation<PingConfig> = async (state, config) => {
  const {} = config;
  return state.ping();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PING, Ping);
export default Ping;
