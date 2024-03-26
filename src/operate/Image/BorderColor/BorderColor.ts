import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BorderColorConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config BorderColorのコンフィグ
 * @returns gmのインスタンス
 */
const BorderColor: ImageManipulation<BorderColorConfig> = async (state, config) => {
  const { color } = config;
  return state.borderColor(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BORDER_COLOR, BorderColor);
export default BorderColor;
