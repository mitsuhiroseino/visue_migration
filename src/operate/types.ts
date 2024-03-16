import { FormattingConfig, InputOputputConfig, ReplacementConfig } from '../types';
import { Condition } from '../utils/isMatch';
import { AddConfig } from './Add';
import { DeleteConfig } from './Delete';
import { EditConfig } from './Edit';
import { FormatConfig } from './Format';
import { ReplaceConfig } from './Replace';
import { OPERATION_TYPE } from './constants';

/**
 * 操作の設定
 */
export type OperationConfigTypes = AddConfig | DeleteConfig | EditConfig | FormatConfig | ReplaceConfig;

/**
 * ソースを操作する際の種別
 */
export type OperationType = (typeof OPERATION_TYPE)[keyof typeof OPERATION_TYPE];

/**
 * 操作の設定
 */
export type OperationConfig<T = string> = FormattingConfig &
  InputOputputConfig &
  ReplacementConfig & {
    /**
     * ID
     */
    id?: string;

    /**
     * 操作種別
     */
    type?: OperationType | T;

    /**
     * 下記の条件に当てはまったコンテンツのみ処理を行う
     * 未指定の場合は全てのコンテンツが処理対象
     * - 文字列で指定した場合はcontentに指定の文字列が含まれているもの
     * - 正規表現の場合はcontentがtestでtrueになったもの
     * - 関数の場合は戻り値がtrueだったもの
     */
    filter?: Condition<OperationParams>;
  };

/**
 * 内容に埋め込む値
 */
export type OperationParams = {
  /**
   * 任意の値
   */
  [key: string | number]: any;
};

/**
 * 処理の結果
 */
export type OperationResult = { content: string; results: OperationConfigTypes[] };

/**
 * 内容に対する操作
 */
export type Operation<C extends OperationConfig = OperationConfig> = (
  content: string,
  config: C,
  params: OperationParams
) => Promise<string>;

/**
 * 静的パターン
 */
export type StaticPattern = string | RegExp;

/**
 * 動的パターン
 */
export type DynamicPattern = (params: OperationParams, options?: { [key: string]: unknown }) => string | RegExp | Function;

/**
 * 静的・動的パターン
 */
export type FlexiblePattern = StaticPattern | DynamicPattern;
