import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Append`の設定
 */
export type AppendConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.APPEND> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.APPEND;

  // 操作固有の設定
  image: string | string[];
  ltr?: boolean;
};
