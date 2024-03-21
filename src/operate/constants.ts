/**
 * テキストに対する操作の種別
 */
export const OPERATION_TYPE = {
  /**
   * 文字列の追加
   */
  ADD: 'add',

  /**
   * 複数の処理を纏めた処理
   */
  BUNDLE: 'bundle',

  /**
   * 文字列の削除
   */
  DELETE: 'delete',

  /**
   * 文字列の編集
   */
  EDIT: 'edit',

  /**
   * 文字列の整形
   */
  FORMAT: 'format',

  /**
   * テンプレートエンジンを使用した生成
   */
  GENERATE: 'generate',

  /**
   * 画像のメタデータ取得
   */
  IMG_META: 'imgmeta',

  /**
   * パラメーターの追加
   */
  PARAMS: 'params',

  /**
   * 文字列の置換
   */
  REPLACE: 'replace',

  /**
   * sharpを用いた画像の変換
   */
  SHARP: 'sharp',

  /**
   * BOMの削除
   */
  UNBOM: 'unbom',
} as const;

/**
 * コンテンツの種別
 */
export const CONTENT_TYPE = {
  /**
   * バイナリー
   */
  BINARY: 'binary',

  /**
   * テキスト
   */
  TEXT: 'text',
} as const;
