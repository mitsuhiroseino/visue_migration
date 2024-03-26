import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TrimConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Trimのコンフィグ
 * @returns gmのインスタンス
 */
const Trim: ImageManipulation<TrimConfig> = async (state, config) => {
  const {} = config;
  return state.trim();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TRIM, Trim);
export default Trim;
