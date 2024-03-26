import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ImplodeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Implodeのコンフィグ
 * @returns gmのインスタンス
 */
const Implode: ImageManipulation<ImplodeConfig> = async (state, config) => {
  const { factor } = config;
  return state.implode(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.IMPLODE, Implode);
export default Implode;
