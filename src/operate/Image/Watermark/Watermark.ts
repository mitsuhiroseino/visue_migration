import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { WatermarkConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Watermarkのコンフィグ
 * @returns gmのインスタンス
 */
const Watermark: ImageManipulation<WatermarkConfig> = async (state, config) => {
  const { brightness, saturation } = config;
  return state.watermark(brightness, saturation);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.WATERMARK, Watermark);
export default Watermark;
