import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RecolorConfig } from './types';

/**
 * 再着色
 *
 * 色変換マトリックスを画像チャンネルに適用する。指定した色やパターンで、画像の色を変更する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-recolor
 *
 * @param state gmのインスタンス(ステート)
 * @param config Recolorのコンフィグ
 * @returns gmのインスタンス
 */
const Recolor: ImageManipulation<RecolorConfig> = async (state, config) => {
  const { matrix } = config;
  return state.recolor(matrix);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RECOLOR, Recolor);
export default Recolor;
