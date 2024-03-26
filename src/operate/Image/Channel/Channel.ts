import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ChannelConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Channelのコンフィグ
 * @returns gmのインスタンス
 */
const Channel: ImageManipulation<ChannelConfig> = async (state, config) => {
  const { type } = config;
  return state.channel(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CHANNEL, Channel);
export default Channel;
