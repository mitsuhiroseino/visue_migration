import { ImageCallback } from '@jimp/core';
import { Invert } from '@jimp/plugin-invert';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulationConfig } from '../types';

/**
 * 画像操作`Invert`の設定
 */
export type InvertConfig = JimpManipulationConfig<typeof JIMP_MANIPULATION_TYPE.INVERT> & {
  callback?: ImageCallback<Invert>;
};
