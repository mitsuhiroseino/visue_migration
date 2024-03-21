import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ModulateConfig } from './types';

/**
 * 明るさ、彩度、色相の回転による画像変換
 * @param sharp Sharpのインスタンス
 * @param config Modulateのコンフィグ
 * @returns Sharpのインスタンス
 */
const Modulate: Manipulation<ModulateConfig> = async (sharp, config) => {
  const { type, ...options } = config;
  return await sharp.modulate(options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MODULATE, Modulate);
export default Modulate;
