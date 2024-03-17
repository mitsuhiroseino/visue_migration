import { CONVERSION_CONFIGS } from '../constants';
import { MigrationJobConfig } from '../types';

/**
 * ファイルのコピーのみすればよい設定か
 * @param configs
 */
export default function isCopyOnly(configs: MigrationJobConfig): boolean {
  return configs.copy || CONVERSION_CONFIGS.every((name) => !configs[name]);
}
