import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { ColorConfig } from './types';

/**
 * 色の調整
 * @param jimp Jimpのインスタンス
 * @param config Colorのコンフィグ
 * @returns Jimpのインスタンス
 */
const Color: JimpManipulation<ColorConfig> = async (jimp, config) => {
  const { actions, callback } = config;
  return await jimp.color(actions, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.COLOR, Color);
export default Color;
