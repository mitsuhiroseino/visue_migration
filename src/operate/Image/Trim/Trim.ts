import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TrimConfig } from './types';

/**
 * トリミング
 *
 * 画像から余白を自動的にトリミングすることができる。画像の周囲の余白を削除して、本来の内容を切り出す。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-trim
 *
 * @param state gmのインスタンス(ステート)
 * @param config Trimのコンフィグ
 * @returns gmのインスタンス
 */
const Trim: ImageManipulation<TrimConfig> = async (state, config) => {
  const {} = config;
  return state.trim();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TRIM, Trim);
export default Trim;
