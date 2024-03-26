import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SilentConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Silentのコンフィグ
 * @returns gmのインスタンス
 */
const Silent: ImageManipulation<SilentConfig> = async (state, config) => {
  const {} = config;
  return state.silent();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SILENT, Silent);
export default Silent;
