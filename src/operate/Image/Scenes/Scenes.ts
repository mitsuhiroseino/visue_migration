import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ScenesConfig } from './types';

/**
 * シーン
 *
 * 画像内のシーンの情報を取得することができる。複数のシーンが含まれる画像ファイルのシーン情報を取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-scenes
 *
 * @param state gmのインスタンス(ステート)
 * @param config Scenesのコンフィグ
 * @returns gmのインスタンス
 */
const Scenes: ImageManipulation<ScenesConfig> = async (state, config) => {
  const { start, end } = config;
  return state.scenes(start, end);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SCENES, Scenes);
export default Scenes;
