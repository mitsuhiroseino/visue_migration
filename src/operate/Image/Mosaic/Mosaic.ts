import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MosaicConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Mosaicのコンフィグ
 * @returns gmのインスタンス
 */
const Mosaic: ImageManipulation<MosaicConfig> = async (state, config) => {
  const {} = config;
  return state.mosaic();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MOSAIC, Mosaic);
export default Mosaic;
