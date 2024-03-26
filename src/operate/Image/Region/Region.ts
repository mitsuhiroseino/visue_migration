import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RegionConfig } from './types';

/**
 * 領域
 *
 * 画像の特定の領域を指定することができる。指定した範囲内の画像処理を行う。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-region
 *
 * @param state gmのインスタンス(ステート)
 * @param config Regionのコンフィグ
 * @returns gmのインスタンス
 */
const Region: ImageManipulation<RegionConfig> = async (state, config) => {
  const { width, height, x, y } = config;
  return state.region(width, height, x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.REGION, Region);
export default Region;
