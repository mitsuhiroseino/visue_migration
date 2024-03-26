import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { OutConfig } from './types';

/**
 * 出力
 *
 * 出力先を設定することができる。処理結果の出力先を指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-out
 *
 * @param state gmのインスタンス(ステート)
 * @param config Outのコンフィグ
 * @returns gmのインスタンス
 */
const Out: ImageManipulation<OutConfig> = async (state, config) => {
  const { customArguments } = config;
  return state.out(...customArguments);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.OUT, Out);
export default Out;
