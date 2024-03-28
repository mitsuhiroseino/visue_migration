import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TreeDepthConfig } from './types';

/**
 * 減色アルゴリズムのツリーの深さ
 *
 * 減色アルゴリズムのツリーの深さを指定することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-treeDepth
 *
 * @param state gmのインスタンス(ステート)
 * @param config TreeDepthのコンフィグ
 * @returns gmのインスタンス
 */
const TreeDepth: ImageManipulation<TreeDepthConfig> = (state, config) => {
  const { depth } = config;
  return state.treeDepth(depth);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TREE_DEPTH, TreeDepth);
export default TreeDepth;
