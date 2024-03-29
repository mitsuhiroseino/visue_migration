import { ComposeOperator } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Compose`の設定
 */
export type ComposeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COMPOSE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COMPOSE;

  // 操作固有の設定
  operator: ComposeOperator | string;
};
