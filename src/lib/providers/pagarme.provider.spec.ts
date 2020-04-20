import { PagarmeProvider } from './pagarme.provider';
import { Pagarme } from '../models/pagarme.model';

describe('PagarMeFactory', () => {
  let service: PagarmeProvider;
  let connection: any;

  beforeAll(async () => {
    service = new PagarmeProvider({
      strategy: 'apiKey',
      api_key: process.env.API_KEY || 'invalid',
    });
  });

  it('Should be instantiated', () => {
    expect(service).toBeDefined();
  });

  it('should connect using api', () => {
    expect(connection).toBeInstanceOf(Pagarme);
  });

  // Transactions

  it('should return my company transactions', async () => {
    const transactions = service.transactions();
    const allTransactions = await transactions?.all();
    console.log(allTransactions);
    expect(allTransactions).toBeInstanceOf(Array);
  });

  it('should find a transaction by id', async () => {
    const id = 8002258;
    const transactions = service.transactions();
    console.log(transactions);
    const foundTransaction = await transactions?.findById(id);
    console.log(foundTransaction);
    expect(foundTransaction).toHaveProperty('id');
  });

  it('should return my company users', async () => {
    const transactions = await connection.client.user.all();
    expect(transactions).toBeInstanceOf(Array);
  });
});
