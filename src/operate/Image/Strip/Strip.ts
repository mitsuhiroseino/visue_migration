import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { StripConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Stripのコンフィグ
 * @returns gmのインスタンス
 */
const Strip: ImageManipulation<StripConfig> = async (state, config) => {
  const {} = config;
  return state.strip();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.STRIP, Strip);
export default Strip;
