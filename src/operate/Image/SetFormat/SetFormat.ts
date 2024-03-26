import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SetFormatConfig } from './types';

/**
 * フォーマット設定
 *
 * 画像のフォーマットを設定することができる。画像のファイル形式や拡張子を指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-setFormat
 *
 * @param state gmのインスタンス(ステート)
 * @param config SetFormatのコンフィグ
 * @returns gmのインスタンス
 */
const SetFormat: ImageManipulation<SetFormatConfig> = async (state, config) => {
  const { format } = config;
  return state.setFormat(format);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SET_FORMAT, SetFormat);
export default SetFormat;
