import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { CoverConfig } from './types';

/**
 * アスペクト比を維持しつつ指定された幅と高さを満たして表示されるよう拡大／縮小する
 * @param jimp Jimpのインスタンス
 * @param config Coverのコンフィグ
 * @returns Jimpのインスタンス
 */
const Cover: JimpManipulation<CoverConfig> = async (jimp, config) => {
  const { width, height, alignBits, mode, callback } = config;
  return await jimp.cover(width, height, alignBits, mode, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.COVER, Cover);
export default Cover;
