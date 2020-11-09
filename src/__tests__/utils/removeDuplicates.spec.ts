import { removeDuplicatesArrayOfObj } from '../../utils/removeDuplicates';

describe('RemoveDuplicates', () => {
  it('should be able to remove duplicates from array of objects.', () => {
    const data = [
      { name: 'teste01', value: 10 },
      { name: 'teste01', value: 10 },
      { name: 'teste02', value: 10 },
      { name: 'teste02', value: 10 },
    ];

    const result = removeDuplicatesArrayOfObj(data, 'name');

    expect(result).toHaveLength(2);
  });

  it('should be able to return null if not have a obj key', () => {
    const data = [
      { name: 'teste01', value: 10 },
      { name: 'teste01', value: 10 },
      { name: 'teste02', value: 10 },
      { name: 'teste02', value: 10 },
    ];
    const result = removeDuplicatesArrayOfObj(data, 'test');

    expect(result).toEqual(null);
  });

  it('should be able to return array if not have something duplicate values', () => {
    const data = [
      { name: 'teste01', value: 10 },
      { name: 'teste02', value: 10 },
      { name: 'teste03', value: 10 },
      { name: 'teste04', value: 10 },
    ];

    const result = removeDuplicatesArrayOfObj(data, 'name');

    expect(result).toHaveLength(4);
  });
});
