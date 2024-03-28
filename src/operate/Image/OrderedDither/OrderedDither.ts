import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OrderedDitherConfig } from './types';

/**
 * 順序付きディザリング
 *
 * 画像にオーダーディザリングを適用することができる。ディザリング効果を画像に適用し、色の表現を改善する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-orderedDither
 *
 * @param state gmのインスタンス(ステート)
 * @param config OrderedDitherのコンフィグ
 * @returns gmのインスタンス
 */
const OrderedDither: ImageManipulation<OrderedDitherConfig> = (state, config) => {
  const { channelType, NxN } = config;
  return state.orderedDither(channelType, NxN);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ORDERED_DITHER, OrderedDither);
export default OrderedDither;
