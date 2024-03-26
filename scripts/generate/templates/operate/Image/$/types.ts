import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Blur`の設定
 */
export type {{{uppercamelcase}}}Config = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.{{{snakecase}}};

{{#each argDefs}}
  {{{this}}}
{{/each}}
};
