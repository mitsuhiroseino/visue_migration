import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CharcoalConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Charcoalのコンフィグ
 * @returns gmのインスタンス
 */
const Charcoal: ImageManipulation<CharcoalConfig> = async (state, config) => {
  const { factor } = config;
  return state.charcoal(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CHARCOAL, Charcoal);
export default Charcoal;
