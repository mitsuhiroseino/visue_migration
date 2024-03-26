import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LoopConfig } from './types';

/**
 * ループ
 *
 * 画像のアニメーションループを設定することができる。アニメーション画像の再生回数やループの制御を行う。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-loop
 *
 * @param state gmのインスタンス(ステート)
 * @param config Loopのコンフィグ
 * @returns gmのインスタンス
 */
const Loop: ImageManipulation<LoopConfig> = async (state, config) => {
  const { iterations } = config;
  return state.loop(iterations);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LOOP, Loop);
export default Loop;
