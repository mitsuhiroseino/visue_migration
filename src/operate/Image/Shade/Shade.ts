import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ShadeConfig } from './types';

/**
 * 影
 *
 * 遠方の光源を使用して画像に影を付ける。指定した方向や強度で影を付けることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-shade
 *
 * @param state gmのインスタンス(ステート)
 * @param config Shadeのコンフィグ
 * @returns gmのインスタンス
 */
const Shade: ImageManipulation<ShadeConfig> = (state, config) => {
  const { azimuth, elevation } = config;
  return state.shade(azimuth, elevation);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHADE, Shade);
export default Shade;
