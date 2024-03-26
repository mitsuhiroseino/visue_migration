import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SilentConfig } from './types';

/**
 * コンソール出力抑止
 *
 * 画像処理の出力を抑制することができる。処理結果を出力せずに処理を行う。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-silent
 *
 * @param state gmのインスタンス(ステート)
 * @param config Silentのコンフィグ
 * @returns gmのインスタンス
 */
const Silent: ImageManipulation<SilentConfig> = async (state, config) => {
  const {} = config;
  return state.silent();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SILENT, Silent);
export default Silent;
