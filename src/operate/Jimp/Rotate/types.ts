import { ImageCallback } from '@jimp/core';
import { Rotate } from '@jimp/plugin-rotate';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulationConfig } from '../types';

/**
 * 画像操作`Rotate`の設定
 */
export type RotateConfig = JimpManipulationConfig<typeof JIMP_MANIPULATION_TYPE.ROTATE> & {
  deg: number;
  mode: string | boolean;
  callback?: ImageCallback<Rotate>;
};
