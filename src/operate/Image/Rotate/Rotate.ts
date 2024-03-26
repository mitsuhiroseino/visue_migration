import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RotateConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Rotateのコンフィグ
 * @returns gmのインスタンス
 */
const Rotate: ImageManipulation<RotateConfig> = async (state, config) => {
  const { backgroundColor, degrees } = config;
  return state.rotate(backgroundColor, degrees);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ROTATE, Rotate);
export default Rotate;
