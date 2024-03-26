import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LabelConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Labelのコンフィグ
 * @returns gmのインスタンス
 */
const Label: ImageManipulation<LabelConfig> = async (state, config) => {
  const { name } = config;
  return state.label(name);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LABEL, Label);
export default Label;
