import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Append`の設定
 */
export type AppendConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.APPEND;

  image: string | string[];
  ltr?: boolean;
};
