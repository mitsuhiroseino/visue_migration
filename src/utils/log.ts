import { LogConfig } from '../types';
import asArray from './asArray';

export default function log(
  level: 'log' | 'trace' | 'debug' | 'info' | 'warn' | 'error',
  messages: any,
  config: LogConfig = {},
) {
  const { silent } = config;
  if (!silent) {
    const msgs = asArray(messages);
    console[level](...msgs);
  }
}
