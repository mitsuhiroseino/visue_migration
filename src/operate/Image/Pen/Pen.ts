import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PenConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Penのコンフィグ
 * @returns gmのインスタンス
 */
const Pen: ImageManipulation<PenConfig> = async (state, config) => {
  const { color } = config;
  return state.pen(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PEN, Pen);
export default Pen;
