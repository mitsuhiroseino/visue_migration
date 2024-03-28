import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CoalesceConfig } from './types';

/**
 * アニメーション
 *
 * 複数の画像を連結することができる。複数の画像を連結して一つのアニメーション画像にする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-coalesce
 *
 * @param state gmのインスタンス(ステート)
 * @param config Coalesceのコンフィグ
 * @returns gmのインスタンス
 */
const Coalesce: ImageManipulation<CoalesceConfig> = (state, config) => {
  const {} = config;
  return state.coalesce();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COALESCE, Coalesce);
export default Coalesce;
