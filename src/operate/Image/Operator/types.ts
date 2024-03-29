import { ChannelOperator } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Operator`の設定
 */
export type OperatorConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.OPERATOR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.OPERATOR;

  // 操作固有の設定
  channel: string;
  operator: ChannelOperator | string;
  rvalue: number;
  percent?: boolean;
};
