export default function catchError(e: any, message: string, ignoreError: boolean) {
  if (!ignoreError) {
    console.error(message);
    throw e;
  }
}
