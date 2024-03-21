import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ResizeConfig } from './types';

/**
 * 解像度の変更
 * @param sharp Sharpのインスタンス
 * @param config Resizeのコンフィグ
 * @returns Sharpのインスタンス
 */
const Resize: Manipulation<ResizeConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.resize(options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RESIZE, Resize);
export default Resize;
