import { Options } from 'prettier';

import { OperationConfigTypes, OperationResult } from '../operate';
import { FormattingConfig, InputOputputConfig, ReplacementConfig } from '../types';
import { Condition } from '../utils/isMatch';
import { ReplacementValues } from '../utils/replaceByValues';
import { MIGRATION_ITEM_STATUS, MIGRATION_STATUS } from './constants';
import { EntryType } from './helpers/getFsGenerator';

/**
 * 移行の設定
 */
export type MigrationConfig<T = OperationConfigTypes, F = Options> = CommonConfig<T, F> &
  MigrationTaskEvents<T, F> &
  MigrationJobEvents<T, F> &
  MigrationIterationEvents<T, F> & {
    /**
     * ID
     */
    id?: string;

    /**
     * タスクの設定
     */
    tasks: MigrationTaskConfig<T, F> | MigrationTaskConfig<T, F>[];

    /**
     * タスクを並列で実行する
     */
    parallelTasks?: boolean;
  };

/**
 * タスクの設定
 */
export type MigrationTaskConfig<T = OperationConfigTypes, F = Options> = CommonConfig<T, F> &
  MigrationTaskEvents<T, F> &
  MigrationJobEvents<T, F> &
  MigrationIterationEvents<T, F> & {
    /**
     * タスクID
     */
    id?: string;

    /**
     * ジョブの設定
     */
    jobs: MigrationJobConfig<T, F> | MigrationJobConfig<T, F>[];

    /**
     * ジョブを並列で実行する
     */
    parallelJobs?: boolean;
  };

/**
 * ジョブの設定
 */
export type MigrationJobConfig<T = OperationConfigTypes, F = Options> = CommonConfig<T, F> &
  MigrationJobEvents<T, F> &
  MigrationIterationEvents<T, F> & {
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
     * このプロパティがtrueの場合は、コンテンツの編集に関するプロパティは無効
     */
    copy?: boolean;

    /**
     * ファイルをバイナリ形式で読み込んで処理する
     */
    binary?: boolean;

    /**
     * 下記の条件に当てはまったファイル・ディレクトリのみ処理対象とする
     * 未指定の場合は全てのファイル・ディレクトリが処理対象
     * - 文字列で指定した場合はパスが部分一致するもの
     * - 正規表現の場合はパスがtestでtrueになったもの
     * - 関数の場合は戻り値がtrueだったもの
     */
    filter?: Condition<any, IterationParams>;

    // 以下はコンテンツの編集に関するプロパティ

    /**
     * フォーマットも含む編集処理前に実行される任意の処理
     * @param content コンテンツ
     * @param params 繰り返し処理毎のパラメーター
     * @param config 当コンフィグ
     * @returns 編集処理対象になるコンテンツ
     */
    initialize?: <C = string | Buffer>(
      content: C,
      params: IterationParams,
      config: Omit<MigrationJobConfig<T, F>, 'initialize'>
    ) => Promise<C>;

    /**
     * 操作の設定
     */
    operations?: T | T[];

    /**
     * フォーマットも含む編集処理後に実行される任意の処理
     * @param content 編集処理後のコンテンツ
     * @param params 繰り返し処理毎のパラメーター
     * @param config 当コンフィグ
     * @returns 最終的なコンテンツ
     */
    finalize?: <C = string | Buffer>(
      content: C,
      params: IterationParams,
      results: OperationResult<C, T>[]
    ) => Promise<C>;
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
type MigrationTaskEvents<T = OperationConfigTypes, F = Options> = {
  /**
   * タスク開始時のハンドラー
   * @param config タスク設定
   * @param params タスクパラメーター
   * @returns
   */
  onTaskStart?: (config: MigrationTaskConfig<T, F>) => void;

  /**
   * タスク終了時のハンドラー
   * @param result タスク処理結果
   * @param config タスク設定
   * @param params タスクパラメーター
   * @returns
   */
  onTaskEnd?: (result: MigrationTaskResult, config: MigrationTaskConfig<T, F>) => void;
};

/**
 * ジョブ用のイベントハンドラー
 */
type MigrationJobEvents<T = OperationConfigTypes, F = Options> = {
  /**
   * ジョブ開始時のハンドラー
   * @param config ジョブ設定
   * @param params ジョブパラメーター
   * @returns
   */
  onJobStart?: (config: MigrationJobConfig<T, F>) => void;

  /**
   * ジョブ終了時のハンドラー
   * @param result ジョブ処理結果
   * @param config ジョブ設定
   * @param params ジョブパラメーター
   * @returns
   */
  onJobEnd?: (result: MigrationJobResult, config: MigrationJobConfig<T, F>) => void;
};

/**
 * イテレーション用のイベントハンドラー
 */
type MigrationIterationEvents<T = OperationConfigTypes, F = Options> = {
  /**
   * イテレーション開始時のハンドラー
   * @param config イテレーション設定
   * @param params イテレーションパラメーター
   * @returns
   */
  onIterationStart?: (config: MigrationJobConfig<T, F>, params: IterationParams) => void;

  /**
   * イテレーション終了時のハンドラー
   * @param result イテレーション処理結果
   * @param config イテレーション設定
   * @param params イテレーションパラメーター
   * @returns
   */
  onIterationEnd?: (
    result: MigrationIterationResult,
    config: MigrationJobConfig<T, F>,
    params: IterationParams
  ) => void;
};

export type CommonConfig<T = OperationConfigTypes, F = Options> = FormattingConfig<F> &
  ReplacementConfig &
  InputOputputConfig &
  IterationConfig<T, F>;

type IterationConfig<T = OperationConfigTypes, F = Options> = {
  /**
   * 繰り返し処理毎にパラメーターを作成するイテレーターの取得元
   */
  iteration?:
    | ((config: MigrationJobConfig<T, F>) => Generator<IterationParams>)
    | IterationParams[]
    | IterationParams
    | string;

  /**
   * iterationに文字列形式のディレクトリのパスを指定した場合にのみ有効
   * パスの取得対象のエントリー種別
   *
   * - 未指定: ファイルのみ
   * - file: ファイルのみ
   * - dir: ディレクトリのみ
   * - both: ファイル、ディレクトリ
   */
  entryType?: EntryType;
};
