import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MonochromeConfig } from './types';

/**
 * モノクロ
 *
 * 画像をモノクロームに変換することができる。白黒や二値化などのモノクローム処理が可能。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-monochrome
 *
 * @param state gmのインスタンス(ステート)
 * @param config Monochromeのコンフィグ
 * @returns gmのインスタンス
 */
const Monochrome: ImageManipulation<MonochromeConfig> = (state, config) => {
  const {} = config;
  return state.monochrome();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MONOCHROME, Monochrome);
export default Monochrome;
