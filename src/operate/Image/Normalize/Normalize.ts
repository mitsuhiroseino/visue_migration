import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NormalizeConfig } from './types';

/**
 * 正規化
 *
 * 画像の色や明るさを正規化することができる。色のバランスや明るさを一定の基準に合わせる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-normalize
 *
 * @param state gmのインスタンス(ステート)
 * @param config Normalizeのコンフィグ
 * @returns gmのインスタンス
 */
const Normalize: ImageManipulation<NormalizeConfig> = (state, config) => {
  const {} = config;
  return state.normalize();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NORMALIZE, Normalize);
export default Normalize;
