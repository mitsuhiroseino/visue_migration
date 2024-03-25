import Jimp from 'jimp';

import { Content } from '../../types';
import asArray from '../../utils/asArray';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import ImageManipulationFactory from './ImageManipulationFactory';
import { ImageConfig } from './types';

/**
 * 画像のメタ情報をparamsに追加する
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Image: Operation<Buffer, ImageConfig> = async (content: Buffer, config: ImageConfig, params: OperationParams) => {
  const { manipulations, ...paramConfig } = config;
  let jimp = Jimp.read(content);

  for (const manipulationConfig of asArray(manipulations)) {
    const manipulation = ImageManipulationFactory.get(manipulationConfig.type);
    if (manipulation) {
      jimp = await manipulation(jimp, manipulationConfig);
    } else {
      console.warn(`There was no manipulation "${manipulationConfig.type}".`);
    }
  }

  return await jimp.finally();
};
export default Image;
OperationFactory.register(OPERATION_TYPE.IMG_META, Image, CONTENT_TYPE.BINARY);
