/**
 * パラメーターにシステムが設定する値を設定する
 * @param params パラメーター
 * @param systemParams システムの値
 */
export default function finshParams<P extends object>(params: P, systemParams: any): P {
  for (const key in systemParams) {
    params[`_${key}`] = systemParams[key];
  }
  return params;
}
