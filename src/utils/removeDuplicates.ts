export function removeDuplicates(data: Array<any>, key: string) {
  if (!(key in data[0])) {
    return null;
  }
  return data.filter((item, index, arr) => {
    const c = arr.map(item => item[key]);
    return index === c.indexOf(item[key]);
  });
}
