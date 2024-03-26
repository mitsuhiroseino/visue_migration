import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NormalizeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Normalizeのコンフィグ
 * @returns gmのインスタンス
 */
const Normalize: ImageManipulation<NormalizeConfig> = async (state, config) => {
  const {} = config;
  return state.normalize();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NORMALIZE, Normalize);
export default Normalize;
