import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LabelConfig } from './types';

/**
 * ラベル
 *
 * 画像にラベルを追加することができる。画像にテキストや注釈を付けるのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-label
 *
 * @param state gmのインスタンス(ステート)
 * @param config Labelのコンフィグ
 * @returns gmのインスタンス
 */
const Label: ImageManipulation<LabelConfig> = (state, config) => {
  const { name } = config;
  return state.label(name);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LABEL, Label);
export default Label;
