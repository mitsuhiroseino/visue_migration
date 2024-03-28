import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EdgeConfig } from './types';

/**
 * エッジ検出
 *
 * 画像のエッジを検出することができる。エッジ検出により、画像の輪郭を強調することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-edge
 *
 * @param state gmのインスタンス(ステート)
 * @param config Edgeのコンフィグ
 * @returns gmのインスタンス
 */
const Edge: ImageManipulation<EdgeConfig> = (state, config) => {
  const { radius } = config;
  return state.edge(radius);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EDGE, Edge);
export default Edge;
