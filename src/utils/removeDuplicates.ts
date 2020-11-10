export function removeDuplicatesArrayOfObj(data: Array<any>, key: string) {
  if (data.length < 1) {
    return [];
  }
  if (!(key in data[0])) {
    return data;
  }
  return data.filter((item, index, arr) => {
    const arrayToCheck = arr.map(item => item[key]);
    return index === arrayToCheck.indexOf(item[key]);
  });
}
