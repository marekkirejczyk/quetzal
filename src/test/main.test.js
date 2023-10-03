import {getBalance} from '../app/getBalance.ts';

test('getBalance() equal 17', () => {
  expect(getBalance()).toBe(17);
});

