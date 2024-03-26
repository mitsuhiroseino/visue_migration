import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ListConfig } from './types';

/**
 * リスト
 *
 * 画像ファイルや画像の属性をリストアップすることができる。画像のメタデータやファイル情報を取得するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-list
 *
 * @param state gmのインスタンス(ステート)
 * @param config Listのコンフィグ
 * @returns gmのインスタンス
 */
const List: ImageManipulation<ListConfig> = async (state, config) => {
  const { listType } = config;
  return state.list(listType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LIST, List);
export default List;
