import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CommandConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Commandのコンフィグ
 * @returns gmのインスタンス
 */
const Command: ImageManipulation<CommandConfig> = async (state, config) => {
  const { customCommand } = config;
  return state.command(customCommand);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMMAND, Command);
export default Command;
