import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PointSizeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config PointSizeのコンフィグ
 * @returns gmのインスタンス
 */
const PointSize: ImageManipulation<PointSizeConfig> = async (state, config) => {
  const { size } = config;
  return state.pointSize(size);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.POINT_SIZE, PointSize);
export default PointSize;
