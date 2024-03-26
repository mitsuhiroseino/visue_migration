import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UpdateConfig } from './types';

/**
 * 更新
 *
 * 画像の属性を更新することができる。画像のメタデータやプロパティを更新する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-update
 *
 * @param state gmのインスタンス(ステート)
 * @param config Updateのコンフィグ
 * @returns gmのインスタンス
 */
const Update: ImageManipulation<UpdateConfig> = async (state, config) => {
  const { seconds } = config;
  return state.update(seconds);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.UPDATE, Update);
export default Update;
