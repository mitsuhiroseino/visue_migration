import { ComposeOperator } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Compose`の設定
 */
export type ComposeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COMPOSE;

  operator: ComposeOperator | string;
};
