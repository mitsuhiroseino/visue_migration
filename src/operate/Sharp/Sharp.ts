import SharpLib from 'sharp';

import { asArray } from '../../utils';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import SharpManipulationFactory from './SharpManipulationFactory';
import { SharpConfig } from './types';

/**
 * sharpを用いた画像の操作
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Sharp: Operation<Buffer, SharpConfig> = async (content: Buffer, config: SharpConfig, params: OperationParams) => {
  const { options, manipulations } = config;
  let sharp = SharpLib(content, options);

  for (const manipulationConfig of asArray(manipulations)) {
    const manipulation = SharpManipulationFactory.get(manipulationConfig.type);
    if (manipulation) {
      sharp = await manipulation(sharp, manipulationConfig);
    } else {
      console.warn(`There was no manipulation "${manipulationConfig.type}".`);
    }
  }

  return await sharp.toBuffer();
};
export default Sharp;
OperationFactory.register(OPERATION_TYPE.SHARP, Sharp, CONTENT_TYPE.BINARY);
