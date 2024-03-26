import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NameConfig } from './types';

/**
 * 名前
 *
 * 画像の名前や識別子を設定することができる。画像に名前を付けて識別するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-name
 *
 * @param state gmのインスタンス(ステート)
 * @param config Nameのコンフィグ
 * @returns gmのインスタンス
 */
const Name: ImageManipulation<NameConfig> = async (state, config) => {
  const {} = config;
  return state.name();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NAME, Name);
export default Name;
