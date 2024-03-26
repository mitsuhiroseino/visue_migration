import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RollConfig } from './types';

/**
 * ロール
 *
 * 画像を指定した方向にスクロールさせることができる。画像を上下左右にスクロールする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-roll
 *
 * @param state gmのインスタンス(ステート)
 * @param config Rollのコンフィグ
 * @returns gmのインスタンス
 */
const Roll: ImageManipulation<RollConfig> = async (state, config) => {
  const { horizontal, vertical } = config;
  return state.roll(horizontal, vertical);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ROLL, Roll);
export default Roll;
