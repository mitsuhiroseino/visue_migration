import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MonochromeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Monochromeのコンフィグ
 * @returns gmのインスタンス
 */
const Monochrome: ImageManipulation<MonochromeConfig> = async (state, config) => {
  const {} = config;
  return state.monochrome();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MONOCHROME, Monochrome);
export default Monochrome;
