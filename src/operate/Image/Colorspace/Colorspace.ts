import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ColorspaceConfig } from './types';

/**
 * カラースペース変更
 *
 * 画像のカラースペースを変更することができる。RGB、CMYK、グレースケールなどのカラースペースに変換することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-colorspace
 *
 * @param state gmのインスタンス(ステート)
 * @param config Colorspaceのコンフィグ
 * @returns gmのインスタンス
 */
const Colorspace: ImageManipulation<ColorspaceConfig> = (state, config) => {
  const { space } = config;
  return state.colorspace(space);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COLORSPACE, Colorspace);
export default Colorspace;
