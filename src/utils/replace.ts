import isRegExp from 'lodash/isRegExp';

export default function replace(
  src: string,
  pattern: string | RegExp,
  replacement: string | ((substring: string, ...args: any[]) => string)
) {
  if (isRegExp(pattern)) {
    return src.replace(pattern, replacement as any);
  } else if (pattern) {
    return src.replaceAll(pattern, replacement as any);
  }
  return src;
}
