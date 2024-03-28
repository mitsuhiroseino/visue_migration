import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ProcessConfig } from './types';

/**
 * プロセス
 *
 * プロセスモジュールを使用して一連の画像を処理する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-process
 *
 * @param state gmのインスタンス(ステート)
 * @param config Processのコンフィグ
 * @returns gmのインスタンス
 */
const Process: ImageManipulation<ProcessConfig> = (state, config) => {
  const { command } = config;
  return state.process(command);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PROCESS, Process);
export default Process;
