import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ShearConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Shearのコンフィグ
 * @returns gmのインスタンス
 */
const Shear: ImageManipulation<ShearConfig> = async (state, config) => {
  const { xDegrees, yDegress } = config;
  return state.shear(xDegrees, yDegress);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHEAR, Shear);
export default Shear;
