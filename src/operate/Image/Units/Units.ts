import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UnitsConfig } from './types';

/**
 * 単位
 *
 * 画像の単位を取得することができる。画像の単位をピクセル、インチ、センチなどで取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-units
 *
 * @param state gmのインスタンス(ステート)
 * @param config Unitsのコンフィグ
 * @returns gmのインスタンス
 */
const Units: ImageManipulation<UnitsConfig> = async (state, config) => {
  const { unitType } = config;
  return state.units(unitType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.UNITS, Units);
export default Units;
