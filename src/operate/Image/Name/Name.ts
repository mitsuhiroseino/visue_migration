import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NameConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Nameのコンフィグ
 * @returns gmのインスタンス
 */
const Name: ImageManipulation<NameConfig> = async (state, config) => {
  const {} = config;
  return state.name();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NAME, Name);
export default Name;
