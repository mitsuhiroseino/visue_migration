import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DelayConfig } from './types';

/**
 * 遅延設定
 *
 * アニメーション画像のフレーム間の遅延を設定することができる。各フレームの表示時間を制御する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-delay
 *
 * @param state gmのインスタンス(ステート)
 * @param config Delayのコンフィグ
 * @returns gmのインスタンス
 */
const Delay: ImageManipulation<DelayConfig> = async (state, config) => {
  const { centiseconds } = config;
  return state.delay(centiseconds);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DELAY, Delay);
export default Delay;
