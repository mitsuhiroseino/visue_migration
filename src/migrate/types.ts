import { Options } from 'prettier';

import { OperationConfigTypes, OperationResult } from '../operate';
import { Condition } from '../utils/isMatch';
import { ReplaceByValuesOptions, ReplacementValues } from '../utils/replaceByValues';
import { MIGRATION_ITEM_STATUS, MIGRATION_STATUS } from './constants';

/**
 * 移行の設定
 */
export type MigrationConfig<O = Options> = CommonConfig<O> &
  MigrationTaskEvents<O> &
  MigrationJobEvents<O> &
  MigrationIterationEvents<O> & {
    /**
     * ID
     */
    id?: string;

    /**
     * タスク
     */
    tasks: MigrationTaskConfig | MigrationTaskConfig[];
  };

/**
 * タスクの設定
 */
export type MigrationTaskConfig<O = Options> = CommonConfig<O> &
  MigrationTaskEvents<O> &
  MigrationJobEvents<O> &
  MigrationIterationEvents<O> & {
    /**
     * タスクID
     */
    id?: string;

    /**
     * タスク配下で並列実行可能なジョブの設定
     */
    jobs: MigrationJobConfig | MigrationJobConfig[];
  };

/**
 * ジョブの設定
 */
export type MigrationJobConfig<O = Options> = CommonConfig<O> &
  MigrationJobEvents<O> &
  MigrationIterationEvents<O> & {
    /**
     *  ジョブID
     */
    id?: string;

    /**
     * 移行元のファイルパス
     * 既存のファイルをコピー&変種して移行する場合に指定
     */
    inputPath?: string | ((params: IterationParams) => string);

    /**
     * 移行先へ保存するファイルのテンプレート
     * 新規のファイルを作成する場合にファイルの内容そのものを指定
     */
    template?: string | ((params: IterationParams) => string);

    /**
     * 移行先へ保存するファイルの内容が記載されたファイルやそれらが保存されたディレクトリ
     * 新規のファイルを作成する場合にパスを指定
     */
    templatePath?: string | ((params: IterationParams) => string);

    /**
     * 移行先のファイルパス
     */
    outputPath: string | ((params: IterationParams) => string);

    /**
     * 処理対象がディレクトリの場合にサブディレクトリは処理しない
     */
    ignoreSubDir?: boolean;

    /**
     * ファイルのコピーのみ行う
     * このプロパティがtrueの場合は、ソースコードの編集に関するプロパティは無効
     */
    copy?: boolean;

    /**
     * 下記の条件に当てはまったファイル・ディレクトリのみ処理対象とする
     * 未指定の場合は全てのファイル・ディレクトリが処理対象
     * - 文字列で指定した場合はパスが部分一致するもの
     * - 正規表現の場合はパスがtestでtrueになったもの
     * - 関数の場合は戻り値がtrueだったもの
     */
    filter?: Condition<IterationParams>;

    // 以下はソースコードの編集に関するプロパティ

    /**
     * フォーマットも含む編集処理前に実行される任意の処理
     * @param source 編集処理前のソースコード
     * @param params 繰り返し処理毎のパラメーター
     * @param config 当コンフィグ
     * @returns 編集処理対象になるソースコード
     */
    initialize?: (source: string, params: IterationParams, config: Omit<MigrationJobConfig<O>, 'initialize'>) => Promise<string>;

    /**
     * 操作の設定
     * ここに定義した操作はフォーマットされたソースコードに対して行われる
     */
    operations?: OperationConfigTypes | OperationConfigTypes[];

    /**
     * フォーマットも含む編集処理後に実行される任意の処理
     * @param source 編集処理後のソースコード
     * @returns 最終的なソースコード
     */
    finalize?: (source: string, params: IterationParams, results: OperationResult[]) => Promise<string>;
  };

/**
 * 移行に必要な任意のパラメーター
 */
export type MigrationParams = ReplacementValues;

/**
 * 繰り返し処理1回分のパラメーター
 * _で始まるプロパティはシステム側で自動的に設定するもの
 * それ以外はMigrationConfigのiteratorで返された値
 */
export type IterationParams = MigrationParams & {
  /**
   * ファイルの読み込み元パス
   */
  _inputPath?: string;

  /**
   * ファイルの出力先パス
   */
  _outputPath?: string;
};

/**
 * 1ファイルorディレクトリ毎の処理結果
 */
export type MigrationItemStatus = (typeof MIGRATION_ITEM_STATUS)[keyof typeof MIGRATION_ITEM_STATUS];

/**
 * 全体の処理結果
 */
export type MigrationStatus = (typeof MIGRATION_STATUS)[keyof typeof MIGRATION_STATUS];

/**
 * 結果
 */
export type MigrationResult = {
  /**
   * タスク毎の処理結果
   */
  results?: MigrationTaskResult[];

  /**
   * 全体の処理結果
   */
  status: MigrationStatus;

  /**
   * メッセージ
   */
  message?: string;

  /**
   * エラー詳細
   */
  error?: any;
};

/**
 * タスクの処理結果
 */
export type MigrationTaskResult = {
  /**
   * ジョブ毎の処理結果
   */
  results: MigrationJobResult[];
};

/**
 * ジョブの処理結果
 */
export type MigrationJobResult = {
  /**
   * イテレーション毎の処理結果
   */
  results: MigrationIterationResult[];
};

/**
 * イテレーションの処理結果
 */
export type MigrationIterationResult = {
  /**
   * 移行元のファイルパス
   */
  inputPath?: string;

  /**
   * 移行先のファイルパス
   */
  outputPath?: string;

  /**
   * 処理ステータス
   */
  status: MigrationItemStatus;
};

/**
 * タスク用のイベントハンドラー
 */
type MigrationTaskEvents<O = Options> = {
  /**
   * タスク開始時のハンドラー
   * @param config タスク設定
   * @param params タスクパラメーター
   * @returns
   */
  onTaskStart?: (config: MigrationTaskConfig<O>) => void;

  /**
   * タスク終了時のハンドラー
   * @param result タスク処理結果
   * @param config タスク設定
   * @param params タスクパラメーター
   * @returns
   */
  onTaskEnd?: (result: MigrationTaskResult, config: MigrationTaskConfig<O>) => void;
};

/**
 * ジョブ用のイベントハンドラー
 */
type MigrationJobEvents<O = Options> = {
  /**
   * ジョブ開始時のハンドラー
   * @param config ジョブ設定
   * @param params ジョブパラメーター
   * @returns
   */
  onJobStart?: (config: MigrationJobConfig<O>) => void;

  /**
   * ジョブ終了時のハンドラー
   * @param result ジョブ処理結果
   * @param config ジョブ設定
   * @param params ジョブパラメーター
   * @returns
   */
  onJobEnd?: (result: MigrationJobResult, config: MigrationJobConfig<O>) => void;
};

/**
 * イテレーション用のイベントハンドラー
 */
type MigrationIterationEvents<O = Options> = {
  /**
   * イテレーション開始時のハンドラー
   * @param config イテレーション設定
   * @param params イテレーションパラメーター
   * @returns
   */
  onIterationStart?: (config: MigrationJobConfig<O>, params: IterationParams) => void;

  /**
   * イテレーション終了時のハンドラー
   * @param result イテレーション処理結果
   * @param config イテレーション設定
   * @param params イテレーションパラメーター
   * @returns
   */
  onIterationEnd?: (result: MigrationIterationResult, config: MigrationJobConfig<O>, params: IterationParams) => void;
};

type CommonConfig<O = Options> = FormattingConfig<O> & ReplacementConfig & InputOputputConfig & IterationConfig<O>;

/**
 * ソースコードのフォーマット処理に関する設定
 */
type FormattingConfig<O = Options> = {
  /**
   * フォーマッターの指定
   * @param source ソース
   * @param options オプション
   * @returns
   */
  formatter?: (source: string, options: O) => Promise<string>;

  /**
   * 移行処理開始前のフォーマット有無
   */
  preFormatting?: boolean | O;

  /**
   * 移行処理終了後のフォーマット有無
   */
  postFormatting?: boolean | O;

  /**
   * フォーマット時の設定
   * preFormatting,postFormattingがtrueの場合は、この設定を使用してフォーマットを行う
   */
  formatterOptions?: O;
};

/**
 * ソースコードの置換に関する設定
 */
type ReplacementConfig = ReplaceByValuesOptions & {
  /**
   * プレイスホルダーと置き換えられる値
   */
  params?: ReplacementValues;
};

/**
 * ファイルの入出力に関する設定
 */
type InputOputputConfig = {
  /**
   * テキストファイル読み込み時のエンコーディング
   * 未指定の場合はutf8
   */
  inputEncoding?: BufferEncoding;

  /**
   * テキストファイル書き込み時のエンコーディング
   * 未指定の場合はutf8
   */
  outputEncoding?: BufferEncoding;

  /**
   * エラーがあってもファイルを出力する
   */
  forceOutput?: boolean;
};

type IterationConfig<O = Options> = {
  /**
   * 繰り返し処理毎にパラメーターを作成するイテレーターの取得元
   */
  iteration?: (config: MigrationJobConfig<O>) => Generator<IterationParams> | IterationParams[] | IterationParams;
};
