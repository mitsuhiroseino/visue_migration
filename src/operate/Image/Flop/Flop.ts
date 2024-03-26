import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FlopConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Flopのコンフィグ
 * @returns gmのインスタンス
 */
const Flop: ImageManipulation<FlopConfig> = async (state, config) => {
  const {} = config;
  return state.flop();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLOP, Flop);
export default Flop;
