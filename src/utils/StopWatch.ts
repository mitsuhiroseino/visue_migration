import { ProcessingTime } from '../types';

export default class StopWatch {
  private _start: Date;

  constructor() {
    this._start = new Date();
  }

  stop(): ProcessingTime {
    const start = this._start,
      end = new Date();
    return { time: end.getTime() - start.getTime() };
  }
}
