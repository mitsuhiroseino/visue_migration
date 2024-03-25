import isFunction from 'lodash/isFunction';

import { Content } from '../../types';
import asArray from '../../utils/asArray';
import OperationFactory from '../OperationFactory';
import { OPERATION_TYPE } from '../constants';
import operate from '../operate';
import { Operation, OperationParams } from '../types';
import { BundleConfig } from './types';

/**
 * 複数の操作を纏めた操作
 * 設定のoperationsを関数で定義すれば、コンテンツの内容に応じて処理を変更することが可能
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Bundle: Operation<Content, BundleConfig> = async (
  content: Content,
  config: BundleConfig<Content>,
  params: OperationParams
) => {
  let { operations } = config;
  if (isFunction(operations)) {
    operations = await operations(content, params);
  }
  operations = asArray(operations);

  const result = await operate(content, operations, params);
  return result.content;
};
export default Bundle;
OperationFactory.register(OPERATION_TYPE.BUNDLE, Bundle);
