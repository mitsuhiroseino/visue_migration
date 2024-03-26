import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RedPrimaryConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config RedPrimaryのコンフィグ
 * @returns gmのインスタンス
 */
const RedPrimary: ImageManipulation<RedPrimaryConfig> = async (state, config) => {
  const { x, y } = config;
  return state.redPrimary(x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RED_PRIMARY, RedPrimary);
export default RedPrimary;
