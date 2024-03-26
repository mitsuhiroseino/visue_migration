import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Command`の設定
 */
export type CommandConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COMMAND;

  customCommand: string;
};
