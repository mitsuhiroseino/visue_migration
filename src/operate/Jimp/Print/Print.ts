import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { PrintConfig } from './types';

/**
 * 文字の描画
 * @param jimp Jimpのインスタンス
 * @param config Printのコンフィグ
 * @returns Jimpのインスタンス
 */
const Print: JimpManipulation<PrintConfig> = async (jimp, config) => {
  const { font, x, y, text, maxWidth, maxHeight, callback } = config;
  return await jimp.print(font, x, y, text, maxWidth, maxHeight, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.PRINT, Print);
export default Print;
