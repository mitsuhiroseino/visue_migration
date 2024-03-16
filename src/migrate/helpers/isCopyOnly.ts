import { MigrationTargetConfig } from '../types';

// 設定されていたらファイルの変換が必要になる設定
const CONVERSION_CONFIGS = ['initialize', 'operations', 'finalize', 'preFormatting', 'postFormatting'];

/**
 * ファイルのコピーのみすればよい設定か
 * @param configs
 */
export default function isCopyOnly(configs: MigrationTargetConfig): boolean {
  return configs.copy || CONVERSION_CONFIGS.every((name) => !configs[name]);
}
