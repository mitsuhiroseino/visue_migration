import { Manipulation } from './types';

class ImageManipulationFactory {
  /**
   * 画像に対する操作
   */
  private _manipulations: {
    [type: string]: Manipulation<any, any>;
  } = {};

  /**
   * 画像操作の登録
   * @param type 画像操作種別
   * @param manipulation 画像操作
   */
  register(type: string, manipulation: Manipulation<any, any>) {
    this._manipulations[type] = manipulation;
  }

  /**
   * 画像操作の取得
   * @param type 画像操作種別
   * @param contentType 処理対象のコンテンツ種別
   * @returns
   */
  get(type: string): Manipulation<any, any> {
    return this._manipulations[type];
  }
}

export default new ImageManipulationFactory();
