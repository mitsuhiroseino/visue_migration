import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SteganoConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Steganoのコンフィグ
 * @returns gmのインスタンス
 */
const Stegano: ImageManipulation<SteganoConfig> = async (state, config) => {
  const { offset } = config;
  return state.stegano(offset);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.STEGANO, Stegano);
export default Stegano;
