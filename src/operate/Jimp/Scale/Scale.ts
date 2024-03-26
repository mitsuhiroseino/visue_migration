import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { ScaleConfig } from './types';

/**
 * 拡大／縮小
 * @param jimp Jimpのインスタンス
 * @param config Scaleのコンフィグ
 * @returns Jimpのインスタンス
 */
const Scale: JimpManipulation<ScaleConfig> = async (jimp, config) => {
  const { fit, factor, width, height, mode, callback } = config;
  if (fit) {
    return await jimp.scaleToFit(width, height, mode, callback);
  } else {
    return await jimp.scale(factor, callback);
  }
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.SCALE, Scale);
export default Scale;
