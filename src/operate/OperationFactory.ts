import { Operation } from './types';

class OperationFactory {
  /**
   * ファイルに対する操作
   */
  private _operations: { [type: string]: Operation<any> } = {};

  /**
   * 操作の登録
   * @param type
   * @param operation
   */
  register(type: string, operation: Operation<any, any>) {
    this._operations[type] = operation;
  }

  /**
   * 操作の取得
   * @param type
   * @returns
   */
  get(type: string) {
    return this._operations[type];
  }
}

export default new OperationFactory();
