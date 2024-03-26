import { PreviewType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Preview`の設定
 */
export type PreviewConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PREVIEW;

  previewType: PreviewType | string;
};
