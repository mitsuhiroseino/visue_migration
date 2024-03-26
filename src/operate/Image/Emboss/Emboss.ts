import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EmbossConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Embossのコンフィグ
 * @returns gmのインスタンス
 */
const Emboss: ImageManipulation<EmbossConfig> = async (state, config) => {
  const { radius } = config;
  return state.emboss(radius);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EMBOSS, Emboss);
export default Emboss;
