import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LatConfig } from './types';

/**
 * 緯度
 *
 * 画像の色調を調整することができる。色相、彩度、明度を変更することで、画像の色調を調整する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-lat
 *
 * @param state gmのインスタンス(ステート)
 * @param config Latのコンフィグ
 * @returns gmのインスタンス
 */
const Lat: ImageManipulation<LatConfig> = async (state, config) => {
  const { width, height, offset, percent } = config;
  return state.lat(width, height, offset, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LAT, Lat);
export default Lat;
