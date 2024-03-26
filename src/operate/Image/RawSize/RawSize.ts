import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RawSizeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config RawSizeのコンフィグ
 * @returns gmのインスタンス
 */
const RawSize: ImageManipulation<RawSizeConfig> = async (state, config) => {
  const { width, height, offset } = config;
  return state.rawSize(width, height, offset);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RAW_SIZE, RawSize);
export default RawSize;
