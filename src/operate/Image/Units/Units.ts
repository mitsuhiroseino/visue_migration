import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UnitsConfig } from './types';

/**
 * 解像度の単位指定
 *
 * 画像の単位を指定することができる。画像の単位をピクセル/インチ、ピクセル/センチなどで指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-units
 *
 * @param state gmのインスタンス(ステート)
 * @param config Unitsのコンフィグ
 * @returns gmのインスタンス
 */
const Units: ImageManipulation<UnitsConfig> = (state, config) => {
  const { unitType } = config;
  return state.units(unitType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.UNITS, Units);
export default Units;
