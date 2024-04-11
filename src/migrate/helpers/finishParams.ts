/**
 * パラメーターにシステムが設定する値を設定する
 * @param params パラメーター
 * @param systemParams システムの値
 * @param newInstance trueの場合は新しいインスタンスを返す
 */
export default function finishParams<P extends object>(params: P, systemParams: any, newInstance?: boolean): P {
  const finishedParams = newInstance ? { ...params } : params;
  for (const key in systemParams) {
    finishedParams[`_${key}`] = systemParams[key];
  }
  return finishedParams;
}
