import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TransformConfig } from './types';

/**
 * 変形
 *
 * 画像の変形処理を行うことができる。回転や反転、歪みなどの変形を施す。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-transform
 *
 * @param state gmのインスタンス(ステート)
 * @param config Transformのコンフィグ
 * @returns gmのインスタンス
 */
const Transform: ImageManipulation<TransformConfig> = async (state, config) => {
  const { color } = config;
  return state.transform(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TRANSFORM, Transform);
export default Transform;
