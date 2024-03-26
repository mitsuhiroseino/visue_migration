import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BitdepthConfig } from './types';

/**
 * ビット深度
 *
 * 画像のビット深度を変更することができる。色の表現精度を調整することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-bitdepth
 *
 * @param state gmのインスタンス(ステート)
 * @param config Bitdepthのコンフィグ
 * @returns gmのインスタンス
 */
const Bitdepth: ImageManipulation<BitdepthConfig> = async (state, config) => {
  const { bits } = config;
  return state.bitdepth(bits);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BITDEPTH, Bitdepth);
export default Bitdepth;
