import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SceneConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Sceneのコンフィグ
 * @returns gmのインスタンス
 */
const Scene: ImageManipulation<SceneConfig> = async (state, config) => {
  const { index } = config;
  return state.scene(index);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SCENE, Scene);
export default Scene;
