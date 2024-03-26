import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { WhiteThresholdConfig } from './types';

/**
 * ホワイトのしきい値
 *
 * 画像のホワイトのしきい値を設定することができる。白色のピクセルとして扱うしきい値を設定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-whiteThreshold
 *
 * @param state gmのインスタンス(ステート)
 * @param config WhiteThresholdのコンフィグ
 * @returns gmのインスタンス
 */
const WhiteThreshold: ImageManipulation<WhiteThresholdConfig> = async (state, config) => {
  const { red, green, blue, opacity, intensity } = config;
  if (intensity == null) {
    return state.whiteThreshold(red, green, blue, opacity);
  } else {
    return state.whiteThreshold(intensity);
  }
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.WHITE_THRESHOLD, WhiteThreshold);
export default WhiteThreshold;
