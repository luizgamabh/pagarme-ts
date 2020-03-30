import test from 'ava';
import { PagarMeFactory } from './pagar-me.factory';
import { IPagarMeAccessData } from '../interfaces/pagar-me.interface';

test('accessData', async (t) => {
  const data: IPagarMeAccessData = {
    strategy: 'password',
    email: 'john@doe.com',
    password: 'password',
  };
  const factory = new PagarMeFactory(data);
  t.deepEqual(await factory.printAccessData(), data);
});
