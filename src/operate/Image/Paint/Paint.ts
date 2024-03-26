import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PaintConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Paintのコンフィグ
 * @returns gmのインスタンス
 */
const Paint: ImageManipulation<PaintConfig> = async (state, config) => {
  const { radius } = config;
  return state.paint(radius);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PAINT, Paint);
export default Paint;
