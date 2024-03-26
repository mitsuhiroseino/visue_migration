import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MonitorConfig } from './types';

/**
 * モニター
 *
 * 画像処理の進行状況を監視することができる。処理の進捗や統計情報などをリアルタイムで表示する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-monitor
 *
 * @param state gmのインスタンス(ステート)
 * @param config Monitorのコンフィグ
 * @returns gmのインスタンス
 */
const Monitor: ImageManipulation<MonitorConfig> = async (state, config) => {
  const {} = config;
  return state.monitor();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MONITOR, Monitor);
export default Monitor;
