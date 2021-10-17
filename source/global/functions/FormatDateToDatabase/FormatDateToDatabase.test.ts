import { FormatDateToDatabase } from './index';

describe('it should be able to convert database date', () => {
  it('return user-friendly format', () => {
    const testDate = '15/10/2021';
    const functionTest = FormatDateToDatabase(testDate);
    expect(functionTest).toEqual('2021-10-15');
  });
});
