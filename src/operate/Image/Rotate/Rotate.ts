import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RotateConfig } from './types';

/**
 * 回転
 *
 * 画像を回転させることができる。指定した角度だけ画像を回転させる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-rotate
 *
 * @param state gmのインスタンス(ステート)
 * @param config Rotateのコンフィグ
 * @returns gmのインスタンス
 */
const Rotate: ImageManipulation<RotateConfig> = async (state, config) => {
  const { backgroundColor, degrees } = config;
  return state.rotate(backgroundColor, degrees);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ROTATE, Rotate);
export default Rotate;
