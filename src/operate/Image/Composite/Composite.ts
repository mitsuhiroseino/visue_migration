import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CompositeConfig } from './types';

/**
 * 合成
 *
 * 画像を合成することができる。複数の画像を組み合わせて1枚の画像を作成する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-composite
 *
 * @param state gmのインスタンス(ステート)
 * @param config Compositeのコンフィグ
 * @returns gmのインスタンス
 */
const Composite: ImageManipulation<CompositeConfig> = async (state, config) => {
  const { changeImagePath, maskImagePath } = config;
  return state.composite(changeImagePath, maskImagePath);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMPOSITE, Composite);
export default Composite;
