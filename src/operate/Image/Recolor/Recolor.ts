import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RecolorConfig } from './types';

/**
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
