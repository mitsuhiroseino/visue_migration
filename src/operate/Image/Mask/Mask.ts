import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MaskConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Maskのコンフィグ
 * @returns gmのインスタンス
 */
const Mask: ImageManipulation<MaskConfig> = async (state, config) => {
  const { filename } = config;
  return state.mask(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MASK, Mask);
export default Mask;
