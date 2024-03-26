import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { ResizeConfig } from './types';

/**
 * リサイズ
 * @param jimp Jimpのインスタンス
 * @param config Resizeのコンフィグ
 * @returns Jimpのインスタンス
 */
const Resize: JimpManipulation<ResizeConfig> = async (jimp, config) => {
  const { width, height, mode, callback } = config;
  return await jimp.resize(width, height, mode, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.RESIZE, Resize);
export default Resize;
