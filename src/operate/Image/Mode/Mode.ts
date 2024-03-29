import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ModeConfig } from './types';

/**
 * 動作モード
 *
 * 画像のモードを設定することができる。カラーモードや画像の表示形式を指定するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-mode
 *
 * @param state gmのインスタンス(ステート)
 * @param config Modeのコンフィグ
 * @returns gmのインスタンス
 */
const Mode: ImageManipulation<ModeConfig> = (state, config) => {
  const { mode } = config;
  return state.mode(mode);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MODE, Mode);
export default Mode;
