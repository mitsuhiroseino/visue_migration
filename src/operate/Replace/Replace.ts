import asArray from '../../utils/asArray';
import prepareValue from '../../utils/prepareValue';
import replace, { StaticPattern } from '../../utils/replace';
import replaceWithConfigs from '../../utils/replaceWithConfigs';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import { ReplaceConfig } from './types';

/**
 * 文字列を置換する操作
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Replace: Operation<string, ReplaceConfig> = async (
  content: string,
  config: ReplaceConfig,
  params: OperationParams
) => {
  return replaceWithConfigs(content, config, params);
};
export default Replace;
OperationFactory.register(OPERATION_TYPE.REPLACE, Replace, CONTENT_TYPE.TEXT);
