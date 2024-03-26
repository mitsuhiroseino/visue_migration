import Jimp from 'jimp';
import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { BlitConfig } from './types';

/**
 * ブール関数を使用して複数の画像を1つに結合する
 * @param jimp Jimpのインスタンス
 * @param config Blitのコンフィグ
 * @returns Jimpのインスタンス
 */
const Blit: JimpManipulation<BlitConfig> = async (jimp, config) => {
  const { src, x, y, srcX, srcY, srcWidth, srcHeight, callback } = config;
  const srcJimp = await Jimp.read(src);
  return await jimp.blit(srcJimp, x, y, srcX, srcY, srcWidth, srcHeight, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.BLIT, Blit);
export default Blit;
