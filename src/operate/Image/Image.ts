import gm from 'gm';
import asArray from '../../utils/asArray';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import JimpManipulationFactory from './ImageManipulationFactory';
import { ImageConfig } from './types';

/**
 * 画像のメタ情報をparamsに追加する
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Image: Operation<Buffer, ImageConfig> = async (content: Buffer, config: ImageConfig, params: OperationParams) => {
  const { manipulations, fileFormat } = config;
  let state = gm(content);

  for (const manipulationConfig of asArray(manipulations)) {
    const manipulation = JimpManipulationFactory.get(manipulationConfig.type);
    if (manipulation) {
      state = manipulation(state, manipulationConfig);
    } else {
      console.warn(`There was no manipulation "${manipulationConfig.type}".`);
    }
  }
  return await new Promise((resolve, reject) => {
    const callback = (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    };
    if (fileFormat != null) {
      // ファイル形式の変換あり
      return state.toBuffer(fileFormat, callback);
    } else {
      // ファイル形式の変換なし
      return state.toBuffer(callback);
    }
  });
};
export default Image;
OperationFactory.register(OPERATION_TYPE.IMAGE, Image, CONTENT_TYPE.BINARY);
