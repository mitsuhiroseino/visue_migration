import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Repage`の設定
 */
export type RepageConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.REPAGE;

  width: number;
  height: number;
  xoff: number;
  yoff: number;
  arg?: string;
  reset: '+' | string;
};
