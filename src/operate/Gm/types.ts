import { State } from 'gm';
import { OPERATION_TYPE } from '../constants';
import { OperationConfigBase } from '../types';
import { GmManipulationConfigType as GmManipulationConfig } from './configTypes';
import { GM_MANIPULATION_TYPE, IMAGE_OUTPUT_FORMAT } from './constants';

/**
 * 画像操作種別
 */
export type GmManipulationType = (typeof GM_MANIPULATION_TYPE)[keyof typeof GM_MANIPULATION_TYPE];

/**
 * 出力画像フォーマット
 */
export type GmOutputFormat = (typeof IMAGE_OUTPUT_FORMAT)[keyof typeof IMAGE_OUTPUT_FORMAT];

/**
 * 画像の操作の設定
 */
export type GmConfig = OperationConfigBase<typeof OPERATION_TYPE.IMAGE> & {
  /**
   * 画像に対する操作
   */
  manipulations: GmManipulationConfigBase | GmManipulationConfigBase[] | GmManipulationConfig | GmManipulationConfig[];

  /**
   * 出力時のファイル形式
   */
  fileFormat?: string;
};

export type GmManipulationConfigBase<T = GmManipulationType> = {
  type: T;
};

/**
 * 画像操作関数
 */
export type GmManipulation<C = GmManipulationConfigBase> = (instance: State, config: C) => State;
