import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { StereoConfig } from './types';

/**
 * ステレオ
 *
 * 画像をステレオ視用に処理することができる。左右の画像を立体視効果として合成する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-stereo
 *
 * @param state gmのインスタンス(ステート)
 * @param config Stereoのコンフィグ
 * @returns gmのインスタンス
 */
const Stereo: ImageManipulation<StereoConfig> = async (state, config) => {
  const {} = config;
  return state.stereo();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.STEREO, Stereo);
export default Stereo;
