import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CompositeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Compositeのコンフィグ
 * @returns gmのインスタンス
 */
const Composite: ImageManipulation<CompositeConfig> = async (state, config) => {
  const { changeImagePath, maskImagePath } = config;
  return state.composite(changeImagePath, maskImagePath);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMPOSITE, Composite);
export default Composite;
