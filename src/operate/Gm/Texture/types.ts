import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Texture`の設定
 */
export type TextureConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.TEXTURE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.TEXTURE;

  // 操作固有の設定
  filename: string;
};
