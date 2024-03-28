import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MapConfig } from './types';

/**
 * マップ
 *
 * 画像のピクセル値をマッピングすることができる。指定されたカラーマップに基づいて、画像の色を変換する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-map
 *
 * @param state gmのインスタンス(ステート)
 * @param config Mapのコンフィグ
 * @returns gmのインスタンス
 */
const Map: ImageManipulation<MapConfig> = (state, config) => {
  const { filename } = config;
  return state.map(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MAP, Map);
export default Map;
