import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PreviewConfig } from './types';

/**
 * プレビュー
 *
 * 画像のプレビューを生成することができる。サムネイルやプレビュー画像を生成する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-preview
 *
 * @param state gmのインスタンス(ステート)
 * @param config Previewのコンフィグ
 * @returns gmのインスタンス
 */
const Preview: ImageManipulation<PreviewConfig> = async (state, config) => {
  const { previewType } = config;
  return state.preview(previewType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PREVIEW, Preview);
export default Preview;
