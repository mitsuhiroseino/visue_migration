import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LevelConfig } from './types';

/**
 * コントラストレベル調整
 *
 * 画像のレベルを調整することができる。色の範囲を変更することで、コントラストや明るさを調整する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-level
 *
 * @param state gmのインスタンス(ステート)
 * @param config Levelのコンフィグ
 * @returns gmのインスタンス
 */
const Level: ImageManipulation<LevelConfig> = (state, config) => {
  const { blackPoint, gamma, whitePoint, percent } = config;
  return state.level(blackPoint, gamma, whitePoint, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LEVEL, Level);
export default Level;
