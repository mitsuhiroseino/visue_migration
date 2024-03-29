import { PreviewType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Preview`の設定
 */
export type PreviewConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.PREVIEW> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PREVIEW;

  // 操作固有の設定
  previewType: PreviewType | string;
};
