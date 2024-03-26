import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EndianConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Endianのコンフィグ
 * @returns gmのインスタンス
 */
const Endian: ImageManipulation<EndianConfig> = async (state, config) => {
  const { type } = config;
  return state.endian(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ENDIAN, Endian);
export default Endian;
