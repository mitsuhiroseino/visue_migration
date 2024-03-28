import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LatConfig } from './types';

/**
 * ローカル適応しきい値処理
 *
 * 指定された幅、高さ、オフセットを使用して、ローカル適応しきい値処理を実行する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-lat
 *
 * @param state gmのインスタンス(ステート)
 * @param config Latのコンフィグ
 * @returns gmのインスタンス
 */
const Lat: ImageManipulation<LatConfig> = (state, config) => {
  const { width, height, offset, percent } = config;
  return state.lat(width, height, offset, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LAT, Lat);
export default Lat;
