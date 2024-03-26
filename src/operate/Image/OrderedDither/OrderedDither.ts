import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OrderedDitherConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config OrderedDitherのコンフィグ
 * @returns gmのインスタンス
 */
const OrderedDither: ImageManipulation<OrderedDitherConfig> = async (state, config) => {
  const { channelType, NxN } = config;
  return state.orderedDither(channelType, NxN);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ORDERED_DITHER, OrderedDither);
export default OrderedDither;
