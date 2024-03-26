import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PreviewConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Previewのコンフィグ
 * @returns gmのインスタンス
 */
const Preview: ImageManipulation<PreviewConfig> = async (state, config) => {
  const { type } = config;
  return state.preview(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PREVIEW, Preview);
export default Preview;
