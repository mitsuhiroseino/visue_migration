import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RollConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Rollのコンフィグ
 * @returns gmのインスタンス
 */
const Roll: ImageManipulation<RollConfig> = async (state, config) => {
  const { horizontal, vertical } = config;
  return state.roll(horizontal, vertical);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ROLL, Roll);
export default Roll;
