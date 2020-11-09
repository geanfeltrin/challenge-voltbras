export function sortElements(arr: Array<any>, key: string) {
  if (!(key in arr[0])) {
    return null;
  }
  const result = arr.sort((a, b) => Number(b[key]) - Number(a[key]));

  return result;
}
