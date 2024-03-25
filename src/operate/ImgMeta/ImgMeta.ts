import Sharp from 'sharp';

import { Content } from '../../types';
import OperationFactory from '../OperationFactory';
import Params from '../Params';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import { ImageConfig } from './types';

/**
 * 画像のメタ情報をparamsに追加する
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const ImgMeta: Operation<Buffer, ImageConfig> = async (
  content: Buffer,
  config: ImageConfig,
  params: OperationParams
) => {
  const { metadata, stats, ...paramConfig } = config;

  // paramsに追加する情報を取得する関数
  const createDiff = async (image: Content) => {
    const sharp = Sharp(image);
    let diff: OperationParams = {};
    if (metadata) {
      // メタデータをparamsに追加
      const _metadata = await sharp.metadata();
      diff = { _metadata };
    }
    if (stats) {
      // statsをparamsに追加
      const _stats = await sharp.stats();
      diff = { ...diff, _stats };
    }
    return diff;
  };

  return await Params(content, { ...paramConfig, createDiff }, params);
};
export default ImgMeta;
OperationFactory.register(OPERATION_TYPE.IMG_META, ImgMeta, CONTENT_TYPE.BINARY);
