export function sortElements(
  arr: Array<any>,
  key: string,
  orderBy: 'desc' | 'asc',
) {
  if (arr.length < 1) {
    return [];
  }
  if (!(key in arr[0])) {
    return arr;
  }

  if (orderBy === 'asc') {
    const result = arr.sort((a, b) => Number(b[key]) - Number(a[key]));
    return result;
  } else if (orderBy === 'desc') {
    const result = arr.sort((a, b) => Number(a[key]) - Number(b[key]));
    return result;
  }
}
