import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OperatorConfig } from './types';

/**
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
