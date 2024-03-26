import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SegmentConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Segmentのコンフィグ
 * @returns gmのインスタンス
 */
const Segment: ImageManipulation<SegmentConfig> = async (state, config) => {
  const { clustherThreshold, smoothingThreshold } = config;
  return state.segment(clustherThreshold, smoothingThreshold);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SEGMENT, Segment);
export default Segment;
