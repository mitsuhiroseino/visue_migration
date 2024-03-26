import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ChannelConfig } from './types';

/**
 * チャンネル操作
 *
 * 画像の特定のチャンネルを操作することができる。RGBやCMYKなどのチャンネルに対して、異なる処理を適用することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-channel
 *
 * @param state gmのインスタンス(ステート)
 * @param config Channelのコンフィグ
 * @returns gmのインスタンス
 */
const Channel: ImageManipulation<ChannelConfig> = async (state, config) => {
  const { channelType } = config;
  return state.channel(channelType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CHANNEL, Channel);
export default Channel;
