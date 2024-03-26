import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PingConfig } from './types';

/**
 * ピンク
 *
 * 画像の情報を取得することができる。画像のメタデータやファイル情報を取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-ping
 *
 * @param state gmのインスタンス(ステート)
 * @param config Pingのコンフィグ
 * @returns gmのインスタンス
 */
const Ping: ImageManipulation<PingConfig> = async (state, config) => {
  const {} = config;
  return state.ping();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PING, Ping);
export default Ping;
