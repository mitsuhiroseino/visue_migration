import Sharp from 'sharp';

import { asArray } from '../../utils';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import { ImageConfig } from './types';

/**
 * 任意の編集をする操作
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Image: Operation<ImageConfig, Buffer> = async (content: Buffer, config: ImageConfig, params: OperationParams) => {
  const { options, withMetadata, withStats, manipulations } = config;
  const sharp = Sharp(content, options);

  if (withMetadata) {
    const metadata = await sharp.metadata();
    params = { ...params, _metadata: metadata };
  }
  if (withStats) {
    const stats = await sharp.stats();
    params = { ...params, _stats: stats };
  }

  for (const manipulation of asArray(manipulations)) {
  }

  return content;
};
export default Image;
OperationFactory.register(OPERATION_TYPE.IMAGE, Image, CONTENT_TYPE.BINARY);
