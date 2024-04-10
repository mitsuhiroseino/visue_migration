import Factory from '../utils/Factory';
import { CONTENT_TYPE } from './constants';
import { ContentType, Operation } from './types';

class OperationFactory extends Factory<Operation<any, any>> {
  /**
   * ファイルに対する操作
   */
  private _contentTypes: {
    [type: string]: ContentType | '_';
  } = {};

  /**
   * 操作の登録
   * @param type 操作種別
   * @param operation 操作
   * @param contentType 操作対象のコンテンツ種別
   */
  register(type: string, operation: Operation<any, any>, contentType: ContentType = CONTENT_TYPE.ANY) {
    super.register(type, operation);
    this._contentTypes[type] = contentType;
  }

  /**
   * 操作の取得
   * @param type 操作種別
   * @param contentType 処理対象のコンテンツ種別
   * @returns
   */
  get(type: string, contentType?: ContentType): Operation<any, any> {
    const cType = this._contentTypes[type];
    if (cType && (cType === contentType || cType == CONTENT_TYPE.ANY || contentType == null)) {
      return super.get(type);
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
