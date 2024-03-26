import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UnsharpConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Unsharpのコンフィグ
 * @returns gmのインスタンス
 */
const Unsharp: ImageManipulation<UnsharpConfig> = async (state, config) => {
  const { radius, sigma, amount, threshold } = config;
  return state.unsharp(radius, sigma, amount, threshold);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.UNSHARP, Unsharp);
export default Unsharp;
