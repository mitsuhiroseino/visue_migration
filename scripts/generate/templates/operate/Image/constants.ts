/**
 * 出力画像フォーマット
 */
export const IMAGE_OUTPUT_FORMAT = {
    BMP: 'bmp',
    GIF: 'gif',
    JPEG: 'jpeg',
    PNG: 'png',
    TIFF: 'tiff',
  } as const;

/**
 * 画像に対する操作
 */
export const IMAGE_MANIPULATION_TYPE = {
{{#each manipulations}}
  /**
   * {{{this.description}}}
   *
   * {{{this.url}}}
   */
  {{{this.snakecase}}}: '{{{this.lowercamelcase}}}',

{{/each}}
} as const;
