import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AppendConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Appendのコンフィグ
 * @returns gmのインスタンス
 */
const Append: ImageManipulation<AppendConfig> = async (state, config) => {
  const { image, ltr } = config;
  return state.append(image, ltr);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.APPEND, Append);
export default Append;
