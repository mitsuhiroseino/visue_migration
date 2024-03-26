import JimpLib from 'jimp';
import asArray from '../../utils/asArray';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import JimpManipulationFactory from './JimpManipulationFactory';
import { JimpConfig } from './types';

/**
 * 画像のメタ情報をparamsに追加する
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Jimp: Operation<Buffer, JimpConfig> = async (content: Buffer, config: JimpConfig, params: OperationParams) => {
  const { manipulations, mime } = config;
  let jimp = await JimpLib.read(content);

  for (const manipulationConfig of asArray(manipulations)) {
    const manipulation = JimpManipulationFactory.get(manipulationConfig.type);
    if (manipulation) {
      jimp = await manipulation(jimp, manipulationConfig);
    } else {
      console.warn(`There was no manipulation "${manipulationConfig.type}".`);
    }
  }

  let mimeType;
  if (mime) {
    mimeType = mime;
  } else {
    mimeType = jimp.getMIME();
  }

  return await jimp.getBufferAsync(mimeType);
};
export default Jimp;
OperationFactory.register(OPERATION_TYPE.JIMP, Jimp, CONTENT_TYPE.BINARY);
