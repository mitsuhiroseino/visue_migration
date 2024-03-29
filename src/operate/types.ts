import { Content, FormattingConfig, InputOputputConfig, ReplacementConfig } from '../types';
import { Condition } from '../utils/isMatch';
import { AddConfig } from './Add';
import { BundleConfig } from './Bundle';
import { DeleteConfig } from './Delete';
import { EditConfig } from './Edit';
import { FormatConfig } from './Format';
import { GenerateConfig } from './Generate';
import { ParamsConfig } from './Params';
import { ReplaceConfig } from './Replace';
import { UnbomConfig } from './Unbom';
import { CONTENT_TYPE, OPERATION_TYPE } from './constants';

/**
 * 操作の設定
 */
export type OperationConfigTypes =
  | AddConfig
  | BundleConfig
  | DeleteConfig
  | EditConfig
  | FormatConfig
  | GenerateConfig
  | ParamsConfig
  | ReplaceConfig
  | UnbomConfig;

/**
 * コンテンツを操作する際の種別
 */
export type OperationType = (typeof OPERATION_TYPE)[keyof typeof OPERATION_TYPE];

/**
 * コンテンツの種別
 */
export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE];

/**
 * 操作の設定
 */
export type OperationConfig<T = OperationType> = FormattingConfig &
  InputOputputConfig &
  ReplacementConfig & {
    /**
     * ID
     */
    id?: string;

    /**
     * 操作種別
     */
    type?: T;

    /**
     * 下記の条件に当てはまったコンテンツのみ処理を行う
     * 未指定の場合は全てのコンテンツが処理対象
     * - 文字列で指定した場合はcontentに指定の文字列が含まれているもの
     * - 正規表現の場合はcontentがtestでtrueになったもの
     * - 関数の場合は戻り値がtrueだったもの
     */
    filter?: Condition;
  };

/**
 * 内容に埋め込む値
 */
export type OperationParams = {
  /**
   * コンテンツ種別
   */
  _contentType?: ContentType;

  /**
   * 任意の値
   */
  [key: string | number]: any;
};

/**
 * 処理の結果
 */
export type OperationResult<C = Content, T = OperationConfigTypes> = { content: C; results: T[] };

/**
 * 内容に対する操作
 */
export type Operation<C = Content, S extends OperationConfig = OperationConfig> = (
  content: C,
  config: S,
  params: OperationParams
) => Promise<C | Content>;

/**
 * 静的パターン
 */
export type StaticPattern = string | RegExp;

/**
 * 動的パターン
 */
export type DynamicPattern = (
  params: OperationParams,
  options?: { [key: string]: unknown }
) => string | RegExp | Function;

/**
 * 静的・動的パターン
 */
export type FlexiblePattern = StaticPattern | DynamicPattern;
