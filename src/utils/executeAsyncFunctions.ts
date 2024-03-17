/**
 * 非同期関数の実行を行う
 * @param fns 非同期関数の配列
 * @param parallel trueの場合は並列実行
 * @returns
 */
export default function executeAsyncFunctions<R = any>(fns: (() => Promise<R>)[], parallel?: boolean): Promise<R[]> {
  if (parallel) {
    // 並列実行
    return Promise.all(fns.map((fn) => fn()));
  } else {
    // 直列実行
    return fns.reduce((currentPromise, fn) => {
      const nextPromise = currentPromise.then((results) => {
        // 前の処理が完了したら次の関数を実行
        return fn().then((result) => {
          // 処理結果は前のpromiseから受け取った配列に追加
          results.push(result);
          return results;
        });
      });
      return nextPromise;
    }, Promise.resolve<R[]>([]));
  }
}
