import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ExtractChannelConfig } from './types';

/**
 * チャンネルの抽出(赤、緑、青、透明度いずれかの抽出)
 * @param sharp Sharpのインスタンス
 * @param config ExtractChannelのコンフィグ
 * @returns Sharpのインスタンス
 */
const ExtractChannel: Manipulation<ExtractChannelConfig> = async (sharp, config) => {
  const { channel } = config;
  return await sharp.extractChannel(channel);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EXTRACT_CHANNEL, ExtractChannel);
export default ExtractChannel;
