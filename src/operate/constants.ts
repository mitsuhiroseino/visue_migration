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
   * パラメーターの追加
   */
  PARAMS: 'params',

  /**
   * 文字列の置換
   */
  REPLACE: 'replace',

  /**
   * BOMの削除
   */
  UNBOM: 'unbom',
} as const;
