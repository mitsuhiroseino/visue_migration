import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ComposeConfig } from './types';

/**
 * 合成
 *
 * 複数の画像を合成することができる。合成モードや透明度などのパラメータを指定して、複数の画像を組み合わせることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-compose
 *
 * @param state gmのインスタンス(ステート)
 * @param config Composeのコンフィグ
 * @returns gmのインスタンス
 */
const Compose: ImageManipulation<ComposeConfig> = async (state, config) => {
  const { operator } = config;
  return state.compose(operator);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMPOSE, Compose);
export default Compose;
