import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DisplaceConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Displaceのコンフィグ
 * @returns gmのインスタンス
 */
const Displace: ImageManipulation<DisplaceConfig> = async (state, config) => {
  const { horizontal, vertical } = config;
  return state.displace(horizontal, vertical);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DISPLACE, Displace);
export default Displace;
