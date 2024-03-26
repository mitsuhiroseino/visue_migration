import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { WhitePointConfig } from './types';

/**
 * ホワイトポイント
 *
 * 画像のホワイトポイントを設定することができる。画像のホワイトポイントを調整する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-whitePoint
 *
 * @param state gmのインスタンス(ステート)
 * @param config WhitePointのコンフィグ
 * @returns gmのインスタンス
 */
const WhitePoint: ImageManipulation<WhitePointConfig> = async (state, config) => {
  const { x, y } = config;
  return state.whitePoint(x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.WHITE_POINT, WhitePoint);
export default WhitePoint;
