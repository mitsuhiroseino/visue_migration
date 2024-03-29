import { PreviewType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Preview`の設定
 */
export type PreviewConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.PREVIEW> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.PREVIEW;

  // 操作固有の設定
  previewType: PreviewType | string;
};
