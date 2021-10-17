import { OmitObjectItens } from './index';

describe('it should be able to filter object', () => {
  it('return filtered object', () => {
    const objectTest = {
      firstname: 'Philipe',
      surname: 'Siqueira',
      age: 35,
      list: [
        {key: '1', letter:'A'},
        {key: '2', letter:'E'},
        {key: '3', letter:'I'},
        {key: '4', letter:'O'},
        {key: '5', letter:'U'},
      ],
      created_at: '2021-10-15',
    }
    const omitArray = ['surname', 'created_at', 'list'];
    const functionTest = OmitObjectItens(objectTest,omitArray);
    
    expect(functionTest).toEqual({
      firstname: 'Philipe',
      age: 35,
    });
  });
});
