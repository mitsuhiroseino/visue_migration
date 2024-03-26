import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ProcessConfig } from './types';

/**
 * プロセス
 *
 * 画像処理を実行することができる。指定された処理を画像に適用し、変換や加工を行う。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-process
 *
 * @param state gmのインスタンス(ステート)
 * @param config Processのコンフィグ
 * @returns gmのインスタンス
 */
const Process: ImageManipulation<ProcessConfig> = async (state, config) => {
  const { command } = config;
  return state.process(command);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PROCESS, Process);
export default Process;
