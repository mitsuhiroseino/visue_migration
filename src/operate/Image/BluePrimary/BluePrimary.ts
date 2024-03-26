import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BluePrimaryConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config BluePrimaryのコンフィグ
 * @returns gmのインスタンス
 */
const BluePrimary: ImageManipulation<BluePrimaryConfig> = async (state, config) => {
  const { x, y } = config;
  return state.bluePrimary(x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BLUE_PRIMARY, BluePrimary);
export default BluePrimary;
