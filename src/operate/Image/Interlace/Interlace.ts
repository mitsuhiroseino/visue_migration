import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { InterlaceConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Interlaceのコンフィグ
 * @returns gmのインスタンス
 */
const Interlace: ImageManipulation<InterlaceConfig> = async (state, config) => {
  const { type } = config;
  return state.interlace(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.INTERLACE, Interlace);
export default Interlace;
