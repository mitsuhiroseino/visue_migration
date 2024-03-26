import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RenderConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Renderのコンフィグ
 * @returns gmのインスタンス
 */
const Render: ImageManipulation<RenderConfig> = async (state, config) => {
  const {} = config;
  return state.render();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RENDER, Render);
export default Render;
