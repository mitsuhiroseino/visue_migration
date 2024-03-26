import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SelectFrameConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config SelectFrameのコンフィグ
 * @returns gmのインスタンス
 */
const SelectFrame: ImageManipulation<SelectFrameConfig> = async (state, config) => {
  const { frame } = config;
  return state.selectFrame(frame);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SELECT_FRAME, SelectFrame);
export default SelectFrame;
