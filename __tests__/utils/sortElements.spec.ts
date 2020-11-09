import { sortElements } from '../../utils/sortElements';

describe('Sort Elements', () => {
  it('should be able to organize array of object in order by ascending', () => {
    const data = [
      { name: 'teste01', value: 12 },
      { name: 'teste01', value: 11 },
      { name: 'teste02', value: 13 },
      { name: 'teste02', value: 14 },
    ];

    const result = sortElements(data, 'value', 'asc');

    expect(result[0]).toEqual({ name: 'teste02', value: 14 });
  });

  it('should be able to organize array of object in order by descending', () => {
    const data = [
      { name: 'teste01', value: 12 },
      { name: 'teste01', value: 11 },
      { name: 'teste02', value: 13 },
      { name: 'teste02', value: 14 },
    ];

    const result = sortElements(data, 'value', 'asc');

    expect(result[0]).toEqual({ name: 'teste02', value: 14 });
  });
  it('should be able to organize array of object in order by descending', () => {
    const data = [
      { name: 'teste01', value: 12 },
      { name: 'teste01', value: 11 },
      { name: 'teste02', value: 13 },
      { name: 'teste02', value: 14 },
    ];

    const result = sortElements(data, 'value', 'desc');

    expect(result[0]).toEqual({ name: 'teste01', value: 11 });
  });

  it('should be able to return empty array if length < 1', () => {
    const result = sortElements([], 'value', 'asc');

    expect(result).toEqual([]);
  });

  it('should be able to return null if not have key of object', () => {
    const data = [
      { name: 'teste01', value: 12 },
      { name: 'teste01', value: 11 },
      { name: 'teste02', value: 13 },
      { name: 'teste02', value: 14 },
    ];

    const result = sortElements(data, 'test', 'asc');

    expect(result).toEqual(null);
  });
});
