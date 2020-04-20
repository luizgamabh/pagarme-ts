import { Pagarme } from '..';
import { PagarmeModel } from '../models/pagarme.model';

describe('Testing transactions', () => {
  let service: Pagarme;
  let connection: any;

  beforeAll(async () => {
    service = new Pagarme({
      strategy: 'apiKey',
      api_key: process.env.API_KEY || 'invalid',
    });
    connection = await service.connect();
  });

  it('Should be instantiated', () => {
    expect(service).toBeDefined();
  });

  it('should connect using api', () => {
    expect(connection).toBeInstanceOf(PagarmeModel);
  });

  // Transactions

  it('should return my company transactions', async () => {
    const transactions = service.client?.transactions;
    const allTransactions = await transactions?.all();
    expect(allTransactions).toBeInstanceOf(Array);
  });

  it('should paginate results', async () => {
    const transactions = service.client?.transactions;
    const allTransactions = await transactions?.all({ count: 2 });
    expect(allTransactions).toHaveLength(2);
  });

  it('should filter by transaction id', async () => {
    const id = 8002258;
    const transactions = service.client?.transactions;
    const foundTransaction = await transactions?.all({ id });
    expect(foundTransaction).toHaveLength(1);
  });

  it('should find a transaction by id', async () => {
    const id = 8002258;
    const transactions = service.client?.transactions;
    const foundTransaction = await transactions?.find({ id });
    expect(foundTransaction.id).toBe(id);
  });
});
