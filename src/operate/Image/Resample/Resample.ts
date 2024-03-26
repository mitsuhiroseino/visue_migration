import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ResampleConfig } from './types';

/**
 * 再サンプリング
 *
 * 画像を指定された水平および垂直解像度にリサンプルする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-resample
 *
 * @param state gmのインスタンス(ステート)
 * @param config Resampleのコンフィグ
 * @returns gmのインスタンス
 */
const Resample: ImageManipulation<ResampleConfig> = async (state, config) => {
  const { horizontal, vertical } = config;
  return state.resample(horizontal, vertical);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RESAMPLE, Resample);
export default Resample;
