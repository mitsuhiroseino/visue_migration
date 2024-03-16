import { compile } from 'handlebars';

import { OPERATION_TYPE } from '../constants';
import { OperationConfig } from '../types';

/**
 * テンプレートエンジンを使用した生成の設定
 */
export type GenerateConfig = OperationConfig &
  Parameters<typeof compile>[1] & {
    /**
     * 操作種別
     */
    type?: typeof OPERATION_TYPE.GENERATE;
  };
