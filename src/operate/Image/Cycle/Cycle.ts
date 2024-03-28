import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CycleConfig } from './types';

/**
 * サイクル
 *
 * 画像を指定された回数だけ複製して連結することができる。アニメーションのループなどに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-cycle
 *
 * @param state gmのインスタンス(ステート)
 * @param config Cycleのコンフィグ
 * @returns gmのインスタンス
 */
const Cycle: ImageManipulation<CycleConfig> = (state, config) => {
  const { amount } = config;
  return state.cycle(amount);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CYCLE, Cycle);
export default Cycle;
