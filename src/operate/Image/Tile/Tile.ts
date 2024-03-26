import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TileConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Tileのコンフィグ
 * @returns gmのインスタンス
 */
const Tile: ImageManipulation<TileConfig> = async (state, config) => {
  const { filename } = config;
  return state.tile(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TILE, Tile);
export default Tile;
