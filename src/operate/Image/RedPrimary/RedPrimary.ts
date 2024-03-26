import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RedPrimaryConfig } from './types';

/**
 * 赤の主要成分
 *
 * 画像の赤のプライマリ値を設定することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-redPrimary
 *
 * @param state gmのインスタンス(ステート)
 * @param config RedPrimaryのコンフィグ
 * @returns gmのインスタンス
 */
const RedPrimary: ImageManipulation<RedPrimaryConfig> = async (state, config) => {
  const { x, y } = config;
  return state.redPrimary(x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RED_PRIMARY, RedPrimary);
export default RedPrimary;
