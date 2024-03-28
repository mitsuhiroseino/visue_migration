import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BluePrimaryConfig } from './types';

/**
 * 青の主要成分
 *
 * 画像の青のプライマリ値を設定することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-bluePrimary
 *
 * @param state gmのインスタンス(ステート)
 * @param config BluePrimaryのコンフィグ
 * @returns gmのインスタンス
 */
const BluePrimary: ImageManipulation<BluePrimaryConfig> = (state, config) => {
  const { x, y } = config;
  return state.bluePrimary(x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BLUE_PRIMARY, BluePrimary);
export default BluePrimary;
