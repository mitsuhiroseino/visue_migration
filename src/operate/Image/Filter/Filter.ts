import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FilterConfig } from './types';

/**
 * フィルタ
 *
 * 画像にフィルター処理を適用することができる。ぼかし、シャープ化、輪郭強調などのさまざまなエフェクトを実現することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-filter
 *
 * @param state gmのインスタンス(ステート)
 * @param config Filterのコンフィグ
 * @returns gmのインスタンス
 */
const Filter: ImageManipulation<FilterConfig> = async (state, config) => {
  const { filterType } = config;
  return state.filter(filterType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FILTER, Filter);
export default Filter;
