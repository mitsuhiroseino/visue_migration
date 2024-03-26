import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CoalesceConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Coalesceのコンフィグ
 * @returns gmのインスタンス
 */
const Coalesce: ImageManipulation<CoalesceConfig> = async (state, config) => {
  const {} = config;
  return state.coalesce();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COALESCE, Coalesce);
export default Coalesce;
