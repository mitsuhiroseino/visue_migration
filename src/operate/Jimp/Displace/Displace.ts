import Jimp from 'jimp';
import JimpManipulationFactory from '../JimpManipulationFactory';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulation } from '../types';
import { DisplaceConfig } from './types';

/**
 * 画像を歪ませる
 * @param jimp Jimpのインスタンス
 * @param config Displaceのコンフィグ
 * @returns Jimpのインスタンス
 */
const Displace: JimpManipulation<DisplaceConfig> = async (jimp, config) => {
  const { map, offset, callback } = config;
  const mapJimp = await Jimp.read(map);
  return await jimp.displace(mapJimp, offset, callback);
};
JimpManipulationFactory.register(JIMP_MANIPULATION_TYPE.DISPLACE, Displace);
export default Displace;
