import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MatteConfig } from './types';

/**
 * マット
 *
 * 画像にマットを追加することができる。マットを追加することで、画像の透過性や形状を調整することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-matte
 *
 * @param state gmのインスタンス(ステート)
 * @param config Matteのコンフィグ
 * @returns gmのインスタンス
 */
const Matte: ImageManipulation<MatteConfig> = async (state, config) => {
  const {} = config;
  return state.matte();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MATTE, Matte);
export default Matte;
