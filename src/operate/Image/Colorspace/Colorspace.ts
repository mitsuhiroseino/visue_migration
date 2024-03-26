import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ColorspaceConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Colorspaceのコンフィグ
 * @returns gmのインスタンス
 */
const Colorspace: ImageManipulation<ColorspaceConfig> = async (state, config) => {
  const { space } = config;
  return state.colorspace(space);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COLORSPACE, Colorspace);
export default Colorspace;
