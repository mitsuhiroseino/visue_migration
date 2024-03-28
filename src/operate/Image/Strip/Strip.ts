import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { StripConfig } from './types';

/**
 * プロファイル削除
 *
 * 画像からすべてのプロファイルとテキスト属性を削除する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-strip
 *
 * @param state gmのインスタンス(ステート)
 * @param config Stripのコンフィグ
 * @returns gmのインスタンス
 */
const Strip: ImageManipulation<StripConfig> = (state, config) => {
  const {} = config;
  return state.strip();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.STRIP, Strip);
export default Strip;
