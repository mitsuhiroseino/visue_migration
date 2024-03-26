import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AdjoinConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Adjoinのコンフィグ
 * @returns gmのインスタンス
 */
const Adjoin: ImageManipulation<AdjoinConfig> = async (state, config) => {
  const {} = config;
  return state.adjoin();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ADJOIN, Adjoin);
export default Adjoin;
