import { CONTENT_TYPE } from './constants';
import { ContentType, Operation } from './types';

class OperationFactory {
  /**
   * ファイルに対する操作
   */
  private _operations: {
    [type: string]: {
      operation: Operation<any, any>;
      contentType?: ContentType;
    };
  } = {};

  /**
   * 操作の登録
   * @param type 操作種別
   * @param operation 操作
   * @param contentType 操作対象のコンテンツ種別
   */
  register(type: string, operation: Operation<any, any>, contentType?: ContentType) {
    this._operations[type] = { operation, contentType };
  }

  /**
   * 操作の取得
   * @param type 操作種別
   * @param contentType 処理対象のコンテンツ種別
   * @returns
   */
  get(type: string, contentType?: ContentType): Operation<any, any> {
    const item = this._operations[type];
    if (item && (item.contentType === contentType || item.contentType == null || contentType == null)) {
      return item.operation;
    }
  }

  /**
   * バイナリ対応の操作の取得
   * @param type 操作種別
   * @returns
   */
  getBinaryOperation(type: string) {
    return this.get(type, CONTENT_TYPE.BINARY);
  }

  /**
   * テキスト対応の操作の取得
   * @param type 操作種別
   * @returns
   */
  getTextOperation(type: string) {
    return this.get(type, CONTENT_TYPE.TEXT);
  }
}

export default new OperationFactory();
