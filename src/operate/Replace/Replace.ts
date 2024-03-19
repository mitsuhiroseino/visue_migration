import asArray from '../../utils/asArray';
import prepareValue from '../../utils/prepareValue';
import replace from '../../utils/replace';
import OperationFactory from '../OperationFactory';
import { CONTENT_TYPE, OPERATION_TYPE } from '../constants';
import { Operation, OperationParams, StaticPattern } from '../types';
import { ReplaceConfig } from './types';

/**
 * 文字列を置換する操作
 * @param content 処理対象
 * @param config 操作設定
 * @param params 1繰り返し毎のパラメーター
 * @returns 処理結果
 */
const Replace: Operation<ReplaceConfig, string> = async (
  content: string,
  config: ReplaceConfig,
  params: OperationParams
) => {
  let { patterns, formatPatterns, replacement = '', formatReplacement, replacementBracket } = config;
  const patternsOpations = { replacementBracket, content, preserveString: !formatPatterns };
  const replacementOpations = { replacementBracket, content, preserveString: !formatReplacement };
  // 前処理
  replacement = prepareValue(replacement, params, replacementOpations);

  let cnt = content;
  for (const pattern of asArray(patterns)) {
    const ptn: StaticPattern = prepareValue(pattern, params, patternsOpations);
    // 置換の実行
    cnt = replace(cnt, ptn, replacement);
  }

  return cnt;
};
export default Replace;
OperationFactory.register(OPERATION_TYPE.REPLACE, Replace, CONTENT_TYPE.TEXT);
