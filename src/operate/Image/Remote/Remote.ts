import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RemoteConfig } from './types';

/**
 * リモート
 *
 * 画像のリモート処理を実行することができる。リモートサーバーに画像を送信して処理を実行し、結果を取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-remote
 *
 * @param state gmのインスタンス(ステート)
 * @param config Remoteのコンフィグ
 * @returns gmのインスタンス
 */
const Remote: ImageManipulation<RemoteConfig> = async (state, config) => {
  const {} = config;
  return state.remote();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.REMOTE, Remote);
export default Remote;
