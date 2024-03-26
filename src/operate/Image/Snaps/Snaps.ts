import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SnapsConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Snapsのコンフィグ
 * @returns gmのインスタンス
 */
const Snaps: ImageManipulation<SnapsConfig> = async (state, config) => {
  const { count } = config;
  return state.snaps(count);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SNAPS, Snaps);
export default Snaps;
