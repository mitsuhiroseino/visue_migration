import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TileConfig } from './types';

/**
 * タイル
 *
 * 画像をタイル状に並べることができる。指定したパターンや配置で画像をタイル表示する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-tile
 *
 * @param state gmのインスタンス(ステート)
 * @param config Tileのコンフィグ
 * @returns gmのインスタンス
 */
const Tile: ImageManipulation<TileConfig> = (state, config) => {
  const { filename } = config;
  return state.tile(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TILE, Tile);
export default Tile;
