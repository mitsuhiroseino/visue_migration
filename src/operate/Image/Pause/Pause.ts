import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PauseConfig } from './types';

/**
 * 一時停止
 *
 * 画像処理の一時停止を行うことができる。処理を一時停止して後で再開することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-pause
 *
 * @param state gmのインスタンス(ステート)
 * @param config Pauseのコンフィグ
 * @returns gmのインスタンス
 */
const Pause: ImageManipulation<PauseConfig> = async (state, config) => {
  const { seconds } = config;
  return state.pause(seconds);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PAUSE, Pause);
export default Pause;
