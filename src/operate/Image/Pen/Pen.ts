import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PenConfig } from './types';

/**
 * ペン
 *
 * 画像に線やパスを描画することができる。ペンのスタイルや太さを指定して、画像に線を描く。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-pen
 *
 * @param state gmのインスタンス(ステート)
 * @param config Penのコンフィグ
 * @returns gmのインスタンス
 */
const Pen: ImageManipulation<PenConfig> = async (state, config) => {
  const { color } = config;
  return state.pen(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PEN, Pen);
export default Pen;
