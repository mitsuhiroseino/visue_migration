import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AntialiasConfig } from './types';

/**
 * アンチエイリアス処理
 *
 * 画像のアンチエイリアス処理を行うことができる。エッジや線を滑らかにすることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-antialias
 *
 * @param state gmのインスタンス(ステート)
 * @param config Antialiasのコンフィグ
 * @returns gmのインスタンス
 */
const Antialias: ImageManipulation<AntialiasConfig> = async (state, config) => {
  const { enable } = config;
  return state.antialias(enable);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ANTIALIAS, Antialias);
export default Antialias;
