import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EncodingConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Encodingのコンフィグ
 * @returns gmのインスタンス
 */
const Encoding: ImageManipulation<EncodingConfig> = async (state, config) => {
  const { encoding } = config;
  return state.encoding(encoding);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ENCODING, Encoding);
export default Encoding;
