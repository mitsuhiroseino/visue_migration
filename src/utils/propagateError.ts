export default function propagateError<E>(error: E, additionalMessage: string) {
  if (error instanceof Error) {
    const message = error.message + additionalMessage;
    const newError = new Error(message);
    newError.stack = error.stack;

    for (let key in error) {
      if (error.hasOwnProperty(key) && !newError.hasOwnProperty(key)) {
        newError[key] = error[key];
      }
    }

    return newError;
  } else {
    return new Error(error + additionalMessage);
  }
}
