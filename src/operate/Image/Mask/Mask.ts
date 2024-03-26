import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MaskConfig } from './types';

/**
 * マスク
 *
 * 画像にマスクを適用することができる。指定されたマスクに基づいて、画像の一部を表示または非表示にする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-mask
 *
 * @param state gmのインスタンス(ステート)
 * @param config Maskのコンフィグ
 * @returns gmのインスタンス
 */
const Mask: ImageManipulation<MaskConfig> = async (state, config) => {
  const { filename } = config;
  return state.mask(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MASK, Mask);
export default Mask;
