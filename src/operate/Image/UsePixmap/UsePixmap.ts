import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UsePixmapConfig } from './types';

/**
 * ピクスマップの使用
 *
 * 画像の表示にピクスマップを使用するかどうかを設定することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-usePixmap
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
