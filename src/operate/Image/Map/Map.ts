import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MapConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Mapのコンフィグ
 * @returns gmのインスタンス
 */
const Map: ImageManipulation<MapConfig> = async (state, config) => {
  const { filename } = config;
  return state.map(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MAP, Map);
export default Map;
