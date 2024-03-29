import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RenderConfig } from './types';

/**
 * レンダリング
 *
 * レンダリングベクター操作。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-render
 *
 * @param state gmのインスタンス(ステート)
 * @param config Renderのコンフィグ
 * @returns gmのインスタンス
 */
const Render: ImageManipulation<RenderConfig> = (state, config) => {
  const {} = config;
  return state.render();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RENDER, Render);
export default Render;
