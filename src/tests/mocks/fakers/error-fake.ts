export function makeFakeError(promise = false): any {
  if (promise) {
    return new Promise((resolve, reject) => reject(new Error()));
  }
  return new Error();
}
