import { FormatDateToUser } from './index';

describe('it should be able to convert database date', () => {
  it('return user-friendly format', () => {
    const testDate = '2021-10-15';
    const functionTest = FormatDateToUser(testDate);
    expect(functionTest).toEqual('15/10/2021');
  });
});
