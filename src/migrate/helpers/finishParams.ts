/**
 * パラメーターにシステムが設定する値を設定する
 * @param params パラメーター
 * @param systemParams システムの値
 */
export default function finishParams<P extends object>(params: P, systemParams: any): P {
  const finishedParams = { ...params };
  for (const key in systemParams) {
    finishedParams[`_${key}`] = systemParams[key];
  }
  return finishedParams;
}
