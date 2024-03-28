import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OperatorConfig } from './types';

/**
 * 演算子
 *
 * 画像チャネルに数学演算子、ビット演算子、または値演算子を適用する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-operator
 *
 * @param state gmのインスタンス(ステート)
 * @param config Operatorのコンフィグ
 * @returns gmのインスタンス
 */
const Operator: ImageManipulation<OperatorConfig> = (state, config) => {
  const { channel, operator, rvalue, percent } = config;
  return state.operator(channel, operator, rvalue, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.OPERATOR, Operator);
export default Operator;
