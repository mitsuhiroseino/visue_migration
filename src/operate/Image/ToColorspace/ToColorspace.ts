import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ToColorspaceConfig } from './types';

/**
 * 出力カラースペースの設定
 * @param sharp Sharpのインスタンス
 * @param config ToColorspaceのコンフィグ
 * @returns Sharpのインスタンス
 */
const ToColorspace: Manipulation<ToColorspaceConfig> = async (sharp, config) => {
  const { colorspace } = config;
  return await sharp.toColorspace(colorspace);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TO_COLORSPACE, ToColorspace);
export default ToColorspace;
