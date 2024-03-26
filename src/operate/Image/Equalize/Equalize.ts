import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EqualizeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Equalizeのコンフィグ
 * @returns gmのインスタンス
 */
const Equalize: ImageManipulation<EqualizeConfig> = async (state, config) => {
  const {} = config;
  return state.equalize();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EQUALIZE, Equalize);
export default Equalize;
