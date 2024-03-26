import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { IconGeometryConfig } from './types';

/**
 * アイコンのジオメトリ
 *
 * アイコンのサイズや配置を指定することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-iconGeometry
 *
 * @param state gmのインスタンス(ステート)
 * @param config IconGeometryのコンフィグ
 * @returns gmのインスタンス
 */
const IconGeometry: ImageManipulation<IconGeometryConfig> = async (state, config) => {
  const { geometry } = config;
  return state.iconGeometry(geometry);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ICON_GEOMETRY, IconGeometry);
export default IconGeometry;
