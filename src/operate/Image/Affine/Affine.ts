import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AffineConfig } from './types';

/**
 * アフィン
 *
 * 画像にアフィン変換を適用することができる。平行移動、回転、スケーリング、シアーなどの変換が可能である。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-affine
 *
 * @param state gmのインスタンス(ステート)
 * @param config Affineのコンフィグ
 * @returns gmのインスタンス
 */
const Affine: ImageManipulation<AffineConfig> = async (state, config) => {
  const { matrix } = config;
  return state.affine(matrix);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.AFFINE, Affine);
export default Affine;
