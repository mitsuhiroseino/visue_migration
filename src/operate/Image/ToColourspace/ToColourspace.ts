import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ToColourspaceConfig } from './types';

/**
 * 出力カラースペースの設定
 * @param sharp Sharpのインスタンス
 * @param config ToColourspaceのコンフィグ
 * @returns Sharpのインスタンス
 */
const ToColourspace: Manipulation<ToColourspaceConfig> = async (sharp, config) => {
  const { colourspace } = config;
  return await sharp.toColourspace(colourspace);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TO_COLOURSPACE, ToColourspace);
export default ToColourspace;
