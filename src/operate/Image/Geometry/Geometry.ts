import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { GeometryConfig } from './types';

/**
 * ジオメトリ
 *
 * 画像の幅や高さ、位置を指定することができる。画像のサイズや配置を調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-geometry
 *
 * @param state gmのインスタンス(ステート)
 * @param config Geometryのコンフィグ
 * @returns gmのインスタンス
 */
const Geometry: ImageManipulation<GeometryConfig> = async (state, config) => {
  const { width, height, option, geometry } = config;
  if (geometry == null) {
    return state.geometry(width, height, option);
  } else {
    return state.geometry(geometry);
  }
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GEOMETRY, Geometry);
export default Geometry;
