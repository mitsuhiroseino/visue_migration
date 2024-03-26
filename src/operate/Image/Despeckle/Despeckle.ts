import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DespeckleConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Despeckleのコンフィグ
 * @returns gmのインスタンス
 */
const Despeckle: ImageManipulation<DespeckleConfig> = async (state, config) => {
  const {} = config;
  return state.despeckle();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DESPECKLE, Despeckle);
export default Despeckle;
