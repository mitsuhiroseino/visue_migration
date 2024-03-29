import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Page`の設定
 */
export type PageConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.PAGE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PAGE;

  // 操作固有の設定
  width: number;
  height: number;
  arg?: '%' | '!' | '<' | '>' | string;
};
