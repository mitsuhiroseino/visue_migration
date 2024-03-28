import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FlattenConfig } from './types';

/**
 * レイヤー統合
 *
 * 画像のレイヤーを平坦化することができる。複数の画像レイヤーを一つの画像に結合する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-flatten
 *
 * @param state gmのインスタンス(ステート)
 * @param config Flattenのコンフィグ
 * @returns gmのインスタンス
 */
const Flatten: ImageManipulation<FlattenConfig> = (state, config) => {
  const {} = config;
  return state.flatten();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLATTEN, Flatten);
export default Flatten;
