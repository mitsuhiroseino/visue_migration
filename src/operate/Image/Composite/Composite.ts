import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { Manipulation } from '../types';
import { CompositeConfig } from './types';

/**
 * 画像の合成
 * @param sharp Sharpのインスタンス
 * @param config Compositeのコンフィグ
 * @returns Sharpのインスタンス
 */
const Composite: Manipulation<CompositeConfig> = async (sharp, config) => {
  const { images } = config;
  return await sharp.composite(images);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMPOSITE, Composite);
export default Composite;
