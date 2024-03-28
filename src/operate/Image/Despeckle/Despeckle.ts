import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DespeckleConfig } from './types';

/**
 * スペックルノイズ除去
 *
 * 画像からスペックルノイズを除去することができる。画像のクリーンアップや改善に使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-despeckle
 *
 * @param state gmのインスタンス(ステート)
 * @param config Despeckleのコンフィグ
 * @returns gmのインスタンス
 */
const Despeckle: ImageManipulation<DespeckleConfig> = (state, config) => {
  const {} = config;
  return state.despeckle();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DESPECKLE, Despeckle);
export default Despeckle;
