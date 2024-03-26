import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { GeometryConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Geometryのコンフィグ
 * @returns gmのインスタンス
 */
const Geometry: ImageManipulation<GeometryConfig> = async (state, config) => {
  const { width, height, option, geometry } = config;
  return state.geometry(width, height, option, geometry);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GEOMETRY, Geometry);
export default Geometry;
