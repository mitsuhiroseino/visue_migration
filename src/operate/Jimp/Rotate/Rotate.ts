import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { RotateConfig } from './types';

/**
 * 回転
 * @param jimp Jimpのインスタンス
 * @param config Rotateのコンフィグ
 * @returns Jimpのインスタンス
 */
const Rotate: JimpManipulation<RotateConfig> = async (jimp, config) => {
  const { deg, mode, callback } = config;
  return await jimp.rotate(deg, mode, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.ROTATE, Rotate);
export default Rotate;
