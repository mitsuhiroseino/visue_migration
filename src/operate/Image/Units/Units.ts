import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UnitsConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Unitsのコンフィグ
 * @returns gmのインスタンス
 */
const Units: ImageManipulation<UnitsConfig> = async (state, config) => {
  const { type } = config;
  return state.units(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.UNITS, Units);
export default Units;
