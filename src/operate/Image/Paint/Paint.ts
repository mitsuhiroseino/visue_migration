import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PaintConfig } from './types';

/**
 * ペイント
 *
 * 画像にペイント処理を適用することができる。画像に直接描画や色の塗りつぶしを行う。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-paint
 *
 * @param state gmのインスタンス(ステート)
 * @param config Paintのコンフィグ
 * @returns gmのインスタンス
 */
const Paint: ImageManipulation<PaintConfig> = async (state, config) => {
  const { radius } = config;
  return state.paint(radius);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PAINT, Paint);
export default Paint;
