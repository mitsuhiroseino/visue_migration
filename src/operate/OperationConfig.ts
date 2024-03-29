import { AddConfig } from './Add';
import { BundleConfig } from './Bundle';
import { DeleteConfig } from './Delete';
import { EditConfig } from './Edit';
import { FormatConfig } from './Format';
import { GenerateConfig } from './Generate';
import { ImageConfig } from './Image';
import { ParamsConfig } from './Params';
import { ReplaceConfig } from './Replace';
import { UnbomConfig } from './Unbom';
import { OperationConfigBase } from './types';

/**
 * 操作の設定
 */
type OperationConfig =
  | AddConfig
  | BundleConfig
  | DeleteConfig
  | EditConfig
  | FormatConfig
  | GenerateConfig
  | ImageConfig
  | ParamsConfig
  | ReplaceConfig
  | UnbomConfig
  | OperationConfigBase<string>;

export default OperationConfig;
