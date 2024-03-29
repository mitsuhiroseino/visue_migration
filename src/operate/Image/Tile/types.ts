import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Tile`の設定
 */
export type TileConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TILE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TILE;

  // 操作固有の設定
  filename: string;
};
