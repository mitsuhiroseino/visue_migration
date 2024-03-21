export default function catchError(e: any, message: string, ignoreError: boolean) {
  if (ignoreError) {
    console.info(message);
  } else {
    console.error(message);
    throw e;
  }
}
