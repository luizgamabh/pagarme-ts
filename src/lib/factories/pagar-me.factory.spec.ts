import { PagarMeFactory } from './pagar-me.factory';

test('connect to pagarme using password strategy', () => {
  expect(PagarMeFactory.sum(1, 2)).toBe(3);
});
