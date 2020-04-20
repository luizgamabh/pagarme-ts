import { Pagarme } from '..';
import { PagarmeModel } from '../models/pagarme.model';
import { promised } from '../utils/promised';

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

  it.skip('should create a new R$10,00 transaction', async () => {
    const transactions = service.client?.transactions;
    const [error, newTransaction] = await promised(
      transactions?.create({
        payment_method: 'credit_card',
        amount: 1000,
        card_cvv: '034',
        card_expiration_date: '0921',
        card_holder_name: 'LUIZ GUSTAVO FREIRE GAMA',
        card_number: '5292050041610883',
        billing: {
          name: 'My house',
          address: {
            city: 'Belo Horizonte',
            state: 'mg',
            country: 'br',
            neighborhood: 'santa inês',
            street: 'Rua Itaobim',
            street_number: '65',
            zipcode: '31080240',
          },
        },
        items: [
          {
            id: 'deef25d89b5fd29b4ccac4f82a31181f',
            quantity: 1,
            tangible: false,
            title: 'Contribuição com campanha abc102030',
            unit_price: 1000,
          },
        ],
        customer: {
          country: 'br',
          documents: [
            {
              type: 'cpf',
              number: '01433345650',
            },
          ],
          email: 'luizgamabh@gmail.com',
          name: 'Luiz Gustavo Freire Gama',
          external_id: '7325',
          phone_numbers: ['+553134614255'],
          type: 'individual',
          birthday: '1983-10-27',
        },
      })
    );
    if (error) {
      console.log(error.response.errors);
    }
    expect(newTransaction.status).toBe('paid');
  });

  it('should refuse a transaction by antifraud', async () => {
    const transactions = service.client?.transactions;
    const [error, newTransaction] = await promised(
      transactions?.create({
        payment_method: 'credit_card',
        amount: 1000,
        card_cvv: '034',
        card_expiration_date: '0921',
        card_holder_name: 'LUIZ GUSTAVO FREIRE GAMA',
        card_number: '5292050041610883',
        billing: {
          name: 'My house',
          address: {
            city: 'Belo Horizonte',
            state: 'mg',
            country: 'br',
            neighborhood: 'santa inês',
            street: 'Rua Itaobim',
            street_number: '65',
            zipcode: '31080240',
          },
        },
        items: [
          {
            id: 'deef25d89b5fd29b4ccac4f82a31181f',
            quantity: 1,
            tangible: false,
            title: 'Contribuição com campanha abc102030',
            unit_price: 1000,
          },
        ],
        customer: {
          country: 'br',
          documents: [
            {
              type: 'cpf',
              number: '11111111111',
            },
          ],
          email: 'luizgamabh@gmail.com',
          name: 'Luiz Gustavo Freire Gama',
          external_id: '7325',
          phone_numbers: ['+553134614255'],
          type: 'individual',
          birthday: '1983-10-27',
        },
      })
    );
    if (error) {
      console.log(error.response.errors);
    }
    expect(newTransaction.status).toBe('refused');
  });
});
