import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { JoinChannelConfig } from './types';

/**
 * チャネルの追加(2つの画像を合成した様な効果)
 * @param sharp Sharpのインスタンス
 * @param config JoinChannelのコンフィグ
 * @returns Sharpのインスタンス
 */
const JoinChannel: Manipulation<JoinChannelConfig> = async (sharp, config) => {
  const { type, images, ...options } = config;
  return await sharp.joinChannel(images, options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.JOIN_CHANNEL, JoinChannel);
export default JoinChannel;
