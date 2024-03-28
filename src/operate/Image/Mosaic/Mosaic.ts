import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MosaicConfig } from './types';

/**
 * モザイク
 *
 * 複数の画像をモザイク状に配置して一つの画像に結合することができる。画像のタイル表示などに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-mosaic
 *
 * @param state gmのインスタンス(ステート)
 * @param config Mosaicのコンフィグ
 * @returns gmのインスタンス
 */
const Mosaic: ImageManipulation<MosaicConfig> = (state, config) => {
  const {} = config;
  return state.mosaic();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MOSAIC, Mosaic);
export default Mosaic;
