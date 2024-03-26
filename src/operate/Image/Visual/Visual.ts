import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { VisualConfig } from './types';

/**
 * ビジュアル
 *
 * 画像のビジュアル情報を取得することができる。画像の色空間やビジュアル特性を取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-visual
 *
 * @param state gmのインスタンス(ステート)
 * @param config Visualのコンフィグ
 * @returns gmのインスタンス
 */
const Visual: ImageManipulation<VisualConfig> = async (state, config) => {
  const { visualType } = config;
  return state.visual(visualType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.VISUAL, Visual);
export default Visual;
