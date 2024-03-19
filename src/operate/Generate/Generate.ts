import Handlebars from 'handlebars';

import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams } from '../types';
import { GenerateConfig } from './types';

/**
 * テンプレートエンジンを使用した生成の操作
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Generate: Operation<GenerateConfig, string> = async (
  content: string,
  config: GenerateConfig,
  params: OperationParams
) => {
  let { id, type, filter, ...compileOptions } = config;
  const template = Handlebars.compile(content, compileOptions);
  // 実行
  return template(params);
};
export default Generate;
OperationFactory.register(OPERATION_TYPE.GENERATE, Generate, CONTENT_TYPE.TEXT);
