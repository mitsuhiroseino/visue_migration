import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { WindowGroupConfig } from './types';

/**
 * ウィンドウグループ
 *
 * 画像のウィンドウグループ情報を取得することができる。画像のウィンドウをグループ化する情報を取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-windowGroup
 *
 * @param state gmのインスタンス(ステート)
 * @param config WindowGroupのコンフィグ
 * @returns gmのインスタンス
 */
const WindowGroup: ImageManipulation<WindowGroupConfig> = async (state, config) => {
  const {} = config;
  return state.windowGroup();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.WINDOW_GROUP, WindowGroup);
export default WindowGroup;
