import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DefineConfig } from './types';

/**
 * パラメータ定義
 *
 * 画像処理に関する設定やパラメータを定義することができる。処理の挙動や結果を細かく調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-define
 *
 * @param state gmのインスタンス(ステート)
 * @param config Defineのコンフィグ
 * @returns gmのインスタンス
 */
const Define: ImageManipulation<DefineConfig> = (state, config) => {
  const { value } = config;
  return state.define(value);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DEFINE, Define);
export default Define;
