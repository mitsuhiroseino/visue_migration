import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RollConfig } from './types';

/**
 * 垂直／水平回転
 *
 * 画像を垂直または水平に回転させる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-roll
 *
 * @param state gmのインスタンス(ステート)
 * @param config Rollのコンフィグ
 * @returns gmのインスタンス
 */
const Roll: ImageManipulation<RollConfig> = async (state, config) => {
  const { horizontal, vertical } = config;
  return state.roll(horizontal, vertical);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ROLL, Roll);
export default Roll;
