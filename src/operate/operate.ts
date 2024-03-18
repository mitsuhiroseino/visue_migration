import { Content } from '../types';
import asArray from '../utils/asArray';
import isMatch from '../utils/isMatch';
import OperationFactory from './OperationFactory';
import { OPERATION_TYPE } from './constants';
import { OperationConfig, OperationConfigTypes, OperationParams, OperationResult } from './types';

/**
 * 処理対象内の文字列をコンフィグに従って置換する
 * @param content 処理対象
 * @param configs 置換設定
 * @param params 置換前・後の文字列に埋め込むパラメーター
 * @returns
 */
export default async function operate(
  content: Content,
  configs: OperationConfig | OperationConfig[],
  params: OperationParams
): Promise<OperationResult> {
  // 置換の為に出来るだけ改行が無い状態にする
  const operationConfigs = asArray(configs);

  // 置換情報を基に処理対象の置換
  const results: OperationConfigTypes[] = [];
  let currentContent = content;
  for (const operationConfig of operationConfigs) {
    // 置換
    let { type = OPERATION_TYPE.REPLACE, filter } = operationConfig;
    const shouldProcess = currentContent != null ? await isMatch(currentContent, filter, params) : false;
    if (shouldProcess) {
      const operation = OperationFactory.get(type);
      if (operation) {
        // オペレーションを直列で実行
        const operatedContent = await operation(currentContent, operationConfig, params);
        if (currentContent !== operatedContent) {
          results.push({ ...operationConfig } as OperationConfigTypes);
          currentContent = operatedContent;
        }
      } else {
        console.warn(`There was no operation "${type}".`);
      }
    }
  }
  return { content: currentContent, results };
}
