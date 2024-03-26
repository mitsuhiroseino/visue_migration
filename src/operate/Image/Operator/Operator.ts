import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OperatorConfig } from './types';

/**
 * 演算子
 *
 * 画像の演算を行うことができる。画像同士の加算、減算、乗算などの演算を実行する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-operator
 *
 * @param state gmのインスタンス(ステート)
 * @param config Operatorのコンフィグ
 * @returns gmのインスタンス
 */
const Operator: ImageManipulation<OperatorConfig> = async (state, config) => {
  const { channel, operator, rvalue, percent } = config;
  return state.operator(channel, operator, rvalue, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.OPERATOR, Operator);
export default Operator;
