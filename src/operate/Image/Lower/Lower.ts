import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LowerConfig } from './types';

/**
 * 擬似的エッジ
 *
 * 画像のエッジを擬似的に3Dに下げる効果を作成する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-lower
 *
 * @param state gmのインスタンス(ステート)
 * @param config Lowerのコンフィグ
 * @returns gmのインスタンス
 */
const Lower: ImageManipulation<LowerConfig> = async (state, config) => {
  const { width, height } = config;
  return state.lower(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LOWER, Lower);
export default Lower;
