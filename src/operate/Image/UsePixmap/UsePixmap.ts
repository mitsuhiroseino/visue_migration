import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UsePixmapConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config UsePixmapのコンフィグ
 * @returns gmのインスタンス
 */
const UsePixmap: ImageManipulation<UsePixmapConfig> = async (state, config) => {
  const {} = config;
  return state.usePixmap();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.USE_PIXMAP, UsePixmap);
export default UsePixmap;
