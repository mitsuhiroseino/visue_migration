import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SnapsConfig } from './types';

/**
 * スナップショット
 *
 * 画像のスナップショットを取得することができる。画像の状態や属性のスナップショットを取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-snaps
 *
 * @param state gmのインスタンス(ステート)
 * @param config Snapsのコンフィグ
 * @returns gmのインスタンス
 */
const Snaps: ImageManipulation<SnapsConfig> = async (state, config) => {
  const { count } = config;
  return state.snaps(count);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SNAPS, Snaps);
export default Snaps;
