import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ModulateConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Modulateのコンフィグ
 * @returns gmのインスタンス
 */
const Modulate: ImageManipulation<ModulateConfig> = async (state, config) => {
  const { b, s, h } = config;
  return state.modulate(b, s, h);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MODULATE, Modulate);
export default Modulate;
