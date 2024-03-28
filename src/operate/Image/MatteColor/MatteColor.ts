import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MatteColorConfig } from './types';

/**
 * マットチャネル色
 *
 * 画像のマットの色を指定することができる。マットの色や透明度を調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-matteColor
 *
 * @param state gmのインスタンス(ステート)
 * @param config MatteColorのコンフィグ
 * @returns gmのインスタンス
 */
const MatteColor: ImageManipulation<MatteColorConfig> = (state, config) => {
  const { color } = config;
  return state.matteColor(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MATTE_COLOR, MatteColor);
export default MatteColor;
