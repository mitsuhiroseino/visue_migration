import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AppendConfig } from './types';

/**
 * 画像の連結
 *
 * 複数の画像を連結して一つの画像にすることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-append
 *
 * @param state gmのインスタンス(ステート)
 * @param config Appendのコンフィグ
 * @returns gmのインスタンス
 */
const Append: ImageManipulation<AppendConfig> = async (state, config) => {
  const { image, ltr } = config;
  return state.append(image, ltr);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.APPEND, Append);
export default Append;
