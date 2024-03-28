import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ScenesConfig } from './types';

/**
 * シーン番号の範囲設定
 *
 * 画像内のシーンの範囲を指定することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-scenes
 *
 * @param state gmのインスタンス(ステート)
 * @param config Scenesのコンフィグ
 * @returns gmのインスタンス
 */
const Scenes: ImageManipulation<ScenesConfig> = (state, config) => {
  const { start, end } = config;
  return state.scenes(start, end);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SCENES, Scenes);
export default Scenes;
