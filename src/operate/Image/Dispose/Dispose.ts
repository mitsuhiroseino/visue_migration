import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DisposeConfig } from './types';

/**
 * 後処理
 *
 * アニメーション画像の各フレームの後処理方法を設定することができる。フレームの間のトランジションやクリア方法などを指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-dispose
 *
 * @param state gmのインスタンス(ステート)
 * @param config Disposeのコンフィグ
 * @returns gmのインスタンス
 */
const Dispose: ImageManipulation<DisposeConfig> = (state, config) => {
  const { method } = config;
  return state.dispose(method);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DISPOSE, Dispose);
export default Dispose;
