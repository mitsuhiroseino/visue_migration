import gm from 'gm';
import asArray from '../../utils/asArray';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import GmManipulationFactory from './GmManipulationFactory';
import { GmConfig } from './types';

/**
 * 画像処理
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Gm: Operation<Buffer, GmConfig> = async (content: Buffer, config: GmConfig, params: OperationParams) => {
  const { manipulations, fileFormat } = config;
  let state = gm(content);

  for (const manipulationConfig of asArray(manipulations)) {
    const manipulation = GmManipulationFactory.get(manipulationConfig.type);
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
export default Gm;
OperationFactory.register(OPERATION_TYPE.GM, Gm, CONTENT_TYPE.BINARY);
