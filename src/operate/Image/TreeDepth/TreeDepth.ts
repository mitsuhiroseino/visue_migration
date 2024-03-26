import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TreeDepthConfig } from './types';

/**
 * ツリーの深さ
 *
 * 画像のツリーの深さを取得することができる。画像ファイルの階層構造の深さを調べる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-treeDepth
 *
 * @param state gmのインスタンス(ステート)
 * @param config TreeDepthのコンフィグ
 * @returns gmのインスタンス
 */
const TreeDepth: ImageManipulation<TreeDepthConfig> = async (state, config) => {
  const { depth } = config;
  return state.treeDepth(depth);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TREE_DEPTH, TreeDepth);
export default TreeDepth;
