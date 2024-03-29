import Jimp from 'jimp';

import { OPERATION_TYPE } from '../constants';
import { OperationConfigBase } from '../types';
import { JIMP_MANIPULATION_TYPE, JIMP_OUTPUT_FORMAT } from './constants';

/**
 * 画像操作種別
 */
export type JimpManipulationType = (typeof JIMP_MANIPULATION_TYPE)[keyof typeof JIMP_MANIPULATION_TYPE];

/**
 * 出力画像フォーマット
 */
export type JimpOutputFormat = (typeof JIMP_OUTPUT_FORMAT)[keyof typeof JIMP_OUTPUT_FORMAT];

/**
 * 画像の操作の設定
 */
export type JimpConfig = OperationConfigBase<typeof OPERATION_TYPE.JIMP> & {
  /**
   * 画像に対する操作
   */
  manipulations: JimpManipulationConfig | JimpManipulationConfig[];

  /**
   * 出力時のファイル形式
   */
  mime?: string;
};

export type JimpManipulationConfig<T = JimpManipulationType> = {
  type: T;
};

/**
 * 画像操作関数
 */
export type JimpManipulation<C = JimpManipulationConfig> = (instance: Jimp, config: C) => Promise<Jimp>;
