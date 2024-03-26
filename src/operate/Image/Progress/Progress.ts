import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ProgressConfig } from './types';

/**
 * 進行状況
 *
 * 画像処理の進行状況を表示することができる。処理の進捗状況や残り時間をリアルタイムで表示する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-progress
 *
 * @param state gmのインスタンス(ステート)
 * @param config Progressのコンフィグ
 * @returns gmのインスタンス
 */
const Progress: ImageManipulation<ProgressConfig> = async (state, config) => {
  const {} = config;
  return state.progress();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PROGRESS, Progress);
export default Progress;
