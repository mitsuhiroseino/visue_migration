import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PingConfig } from './types';

/**
 * 画像特性
 *
 * 画像の特徴を効率的に判断する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-ping
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
