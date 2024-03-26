import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { QualityConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Qualityのコンフィグ
 * @returns gmのインスタンス
 */
const Quality: ImageManipulation<QualityConfig> = async (state, config) => {
  const { level } = config;
  return state.quality(level);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.QUALITY, Quality);
export default Quality;
