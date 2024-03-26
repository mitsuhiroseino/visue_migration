import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NoopConfig } from './types';

/**
 * 無効
 *
 * 画像処理を行わずに、画像をそのまま返すことができる。何もしない処理を行う。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-noop
 *
 * @param state gmのインスタンス(ステート)
 * @param config Noopのコンフィグ
 * @returns gmのインスタンス
 */
const Noop: ImageManipulation<NoopConfig> = async (state, config) => {
  const {} = config;
  return state.noop();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NOOP, Noop);
export default Noop;
