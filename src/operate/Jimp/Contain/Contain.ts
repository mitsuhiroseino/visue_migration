import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { ContainConfig } from './types';

/**
 * アスペクト比を維持しつつ指定された幅と高さに収まるように拡大／縮小する
 * @param jimp Jimpのインスタンス
 * @param config Containのコンフィグ
 * @returns Jimpのインスタンス
 */
const Contain: JimpManipulation<ContainConfig> = async (jimp, config) => {
  const { width, height, alignBits, mode, callback } = config;
  return await jimp.contain(width, height, alignBits, mode, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.CONTAIN, Contain);
export default Contain;
