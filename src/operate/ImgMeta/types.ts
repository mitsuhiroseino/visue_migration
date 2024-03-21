import Sharp from 'sharp';

import { ParamsConfig } from '../Params';
import { OPERATION_TYPE } from '../constants';
import { OperationConfig } from '../types';

/**
 * sharpインスタンス取得時のオプション
 */
export type SharpOptions = Sharp.SharpOptions;

/**
 * 画像の操作の設定
 */
export type ImageConfig = OperationConfig<Buffer> &
  Omit<ParamsConfig, 'createDiff'> & {
    /**
     * 操作種別
     */
    type?: typeof OPERATION_TYPE.IMG_META;

    /**
     * メタデータをparams._metadataとして読み込む
     *
     * https://sharp.pixelplumbing.com/api-input#metadata
     */
    metadata?: boolean;

    /**
     * 状態をparams._statsとして読み込む
     *
     * https://sharp.pixelplumbing.com/api-input#stats
     */
    stats?: boolean;
  };
