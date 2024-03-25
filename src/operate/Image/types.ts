import Jimp from 'jimp';

import { ParamsConfig } from '../Params';
import { OPERATION_TYPE } from '../constants';
import { OperationConfig } from '../types';
import { IMAGE_MANIPULATION_TYPE, IMAGE_OUTPUT_FORMAT } from './constants';

/**
 * 画像操作種別
 */
export type ImageManipulationType = (typeof IMAGE_MANIPULATION_TYPE)[keyof typeof IMAGE_MANIPULATION_TYPE];

/**
 * 出力画像フォーマット
 */
export type ImageOutputFormat = (typeof IMAGE_OUTPUT_FORMAT)[keyof typeof IMAGE_OUTPUT_FORMAT];

/**
 * 画像の操作の設定
 */
export type ImageConfig = OperationConfig<Buffer> & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.IMAGE;

  /**
   * 画像に対する操作
   */
  manipulations: ImageManipulationConfig | ImageManipulationConfig[];
};

export type ImageManipulationConfig = {
  type: ImageManipulationType;
};

/**
 * 画像操作関数
 */
export type ImageManipulation<C = ImageManipulationConfig> = (instance: Jimp, config: C) => Promise<Jimp>;
