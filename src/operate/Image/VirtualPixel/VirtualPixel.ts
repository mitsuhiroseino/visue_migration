import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { VirtualPixelConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config VirtualPixelのコンフィグ
 * @returns gmのインスタンス
 */
const VirtualPixel: ImageManipulation<VirtualPixelConfig> = async (state, config) => {
  const { method } = config;
  return state.virtualPixel(method);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.VIRTUAL_PIXEL, VirtualPixel);
export default VirtualPixel;
