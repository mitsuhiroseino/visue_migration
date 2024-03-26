import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ClipConfig } from './types';

/**
 * クリップ
 *
 * 画像をクリッピングすることができる。指定された範囲内のピクセルのみが残り、それ以外のピクセルは削除される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-clip
 *
 * @param state gmのインスタンス(ステート)
 * @param config Clipのコンフィグ
 * @returns gmのインスタンス
 */
const Clip: ImageManipulation<ClipConfig> = async (state, config) => {
  const {} = config;
  return state.clip();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CLIP, Clip);
export default Clip;
