import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { ExtendConfig } from './types';

/**
 * 縦横サイズの変更(余白の追加、トリミング)
 * @param sharp Sharpのインスタンス
 * @param config Extendのコンフィグ
 * @returns Sharpのインスタンス
 */
const Extend: Manipulation<ExtendConfig> = async (sharp, config) => {
  const { type, ...cfg } = config;
  return await sharp.extend(cfg);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EXTEND, Extend);
export default Extend;
