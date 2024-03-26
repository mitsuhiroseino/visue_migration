import SharpLib from 'sharp';

import { Content } from '../../types';
import { OPERATION_TYPE } from '../constants';
import { OperationConfig, OperationParams } from '../types';
import { SHARP_MANIPULATION_TYPE, SHARP_OUTPUT_FORMAT } from './constants';

/**
 * 画像操作種別
 */
export type SharpManipulationType = (typeof SHARP_MANIPULATION_TYPE)[keyof typeof SHARP_MANIPULATION_TYPE];

/**
 * 出力画像フォーマット
 */
export type SharpOutputFormat = (typeof SHARP_OUTPUT_FORMAT)[keyof typeof SHARP_OUTPUT_FORMAT];

/**
 * ICCプロファイル
 */
export type IccProfile = 'srgb' | 'p3' | 'cmyk';

/**
 * ICCプロファイル設定
 */
export type IccProfileConfig = { iccProfile: IccProfile } & SharpLib.WithIccProfileOptions;

/**
 * 編集可能なメタデータ
 */
export type WriteableMetadata = SharpLib.WriteableMetadata;

/**
 * tileのオプション
 */
export type TileOptions = SharpLib.TileOptions;

/**
 * EXIF
 */
export type Exif = SharpLib.Exif;

/**
 * sharpインスタンス取得時のオプション
 */
export type SharpOptions = SharpLib.SharpOptions;

/**
 * 画像の操作の設定
 */
export type SharpConfig = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.SHARP;

  // 入力系オプション

  /**
   * sharpインスタンス取得時のオプション
   */
  options?: SharpOptions;

  /**
   * 画像に対する操作
   */
  manipulations: SharpManipulationConfig | SharpManipulationConfig[];

  // 出力系オプション

  /**
   * EXIFメタデータの出力
   *
   * - 未指定,keep: 入力のEXIFメタデータをそのまま出力
   * - remove: EXIFメタデータを削除
   * - with: オプションexifに設定された情報を出力
   * - merge: 入力のEXIFとオプションexifに設定された情報をマージして出力
   */
  outputExif?: 'keep' | 'remove' | 'with' | 'merge';

  /**
   * 出力するEXIFメタデータ
   * outputExif='with','merge'の場合に有効
   */
  exif?: Exif | ((content: Content, params: OperationParams) => Exif);

  /**
   * ICCプロファイルの出力
   *
   * - 未指定、keep: 入力画像のICCプロファイルをそのまま出力
   * - with: オプションiccProfileに設定された内容で変換し出力
   */
  outputIccProfile?: 'keep' | 'with';

  /**
   * 出力するICCプロファイル
   * outputIccProfile='with'の場合に有効
   */
  iccProfile?: IccProfile | IccProfileConfig;

  /**
   * 全てのメタデータ(EXIF,ICC,XMP,IPTC)の出力
   *
   * - 未指定、keep: 入力画像のメタデータをそのまま出力
   * - with: オプションmetadataに設定された内容で出力
   */
  outputMetadata?: 'keep' | 'with';

  /**
   * 出力するメタデータ
   * outputMetadata='with'の場合に有効
   */
  metadata?: WriteableMetadata;

  /**
   * 出力画像フォーマット
   * 未指定の場合は入力時のフォーマットで出力
   */
  outputFormat?: SharpOutputFormat;

  /**
   * タイルベースのディープズーム(イメージ ピラミッド)出力を使用する
   */
  tile?: TileOptions;

  /**
   * 処理のタイムアウト時間を指定する
   * タイムアウト時間を超えても処理が終わらない場合は例外が発生する
   */
  timeout?: number;
};

/**
 * 画像に対する操作
 */
export type SharpManipulationConfig = {
  /**
   * 画像操作種別
   */
  type: SharpManipulationType;
};

/**
 * 画像操作関数
 */
export type SharpManipulation<C = SharpManipulationConfig, I = SharpLib.Sharp> = (instance: I, config: C) => Promise<I>;
