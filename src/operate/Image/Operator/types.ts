import { ChannelOperator } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Operator`の設定
 */
export type OperatorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.OPERATOR;

  channel: string;
  operator: ChannelOperator | string;
  rvalue: number;
  percent?: boolean;
};
