import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MontageConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Montageのコンフィグ
 * @returns gmのインスタンス
 */
const Montage: ImageManipulation<MontageConfig> = async (state, config) => {
  const { otherImg } = config;
  return state.montage(otherImg);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MONTAGE, Montage);
export default Montage;
