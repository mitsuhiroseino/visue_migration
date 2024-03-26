import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { GreenPrimaryConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config GreenPrimaryのコンフィグ
 * @returns gmのインスタンス
 */
const GreenPrimary: ImageManipulation<GreenPrimaryConfig> = async (state, config) => {
  const { x, y } = config;
  return state.greenPrimary(x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GREEN_PRIMARY, GreenPrimary);
export default GreenPrimary;
