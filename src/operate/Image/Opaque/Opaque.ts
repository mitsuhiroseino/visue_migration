import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OpaqueConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Opaqueのコンフィグ
 * @returns gmのインスタンス
 */
const Opaque: ImageManipulation<OpaqueConfig> = async (state, config) => {
  const { color } = config;
  return state.opaque(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.OPAQUE, Opaque);
export default Opaque;
