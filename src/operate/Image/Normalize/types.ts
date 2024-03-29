import { ImageCallback } from '@jimp/core';
import { Normalize } from '@jimp/plugin-normalize';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfig } from '../types';

/**
 * 画像操作`Normalize`の設定
 */
export type NormalizeConfig = ImageManipulationConfig<typeof JIMP_MANIPULATION_TYPE.NORMALIZE> & {
  callback?: ImageCallback<Normalize>;
};
