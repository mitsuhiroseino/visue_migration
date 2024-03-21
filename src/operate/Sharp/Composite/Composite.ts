import SharpManipulationFactory from '../SharpManipulationFactory';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulation } from '../types';
import { CompositeConfig } from './types';

/**
 * 画像の合成
 * @param sharp Sharpのインスタンス
 * @param config Compositeのコンフィグ
 * @returns Sharpのインスタンス
 */
const Composite: SharpManipulation<CompositeConfig> = async (sharp, config) => {
  const { images } = config;
  return await sharp.composite(images);
};
SharpManipulationFactory.register(SHARP_MANIPULATION_TYPE.COMPOSITE, Composite);
export default Composite;
