import Jimp from 'jimp';

import { OPERATION_TYPE } from '../constants';
import { OperationConfigBase } from '../types';
import { JIMP_MANIPULATION_TYPE, JIMP_OUTPUT_FORMAT } from './constants';

/**
 * 画像操作種別
 */
export type ImageManipulationType = (typeof JIMP_MANIPULATION_TYPE)[keyof typeof JIMP_MANIPULATION_TYPE];

/**
 * 出力画像フォーマット
 */
export type ImageOutputFormat = (typeof JIMP_OUTPUT_FORMAT)[keyof typeof JIMP_OUTPUT_FORMAT];

/**
 * 画像の操作の設定
 */
export type ImageConfig = OperationConfigBase<typeof OPERATION_TYPE.IMAGE> & {
  /**
   * 画像に対する操作
   */
  manipulations: ImageManipulationConfig | ImageManipulationConfig[];

  /**
   * 出力時のファイル形式
   */
  mime?: string;
};

export type ImageManipulationConfig<T = ImageManipulationType> = {
  type: T;
};

/**
 * 画像操作関数
 */
export type ImageManipulation<C = ImageManipulationConfig> = (instance: Jimp, config: C) => Promise<Jimp>;
