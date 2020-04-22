import { Pagarme } from '..';
import { promised } from '../utils/promised';

describe('Testing transactions', () => {
  let service: Pagarme;

  beforeAll(async () => {
    service = new Pagarme({
      strategy: 'apiKey',
      api_key: process.env.API_KEY || 'invalid',
    });
    await service.connect();
  });

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

  it('should create a new R$10,00 transaction', async () => {
    const transactions = service.client?.transactions;
    // https://www.4devs.com.br/gerador_de_numero_cartao_credito
    const [error, newTransaction] = await promised(
      transactions?.create({
        payment_method: 'credit_card',
        amount: 1000,
        card_cvv: '479',
        card_expiration_date: '0422',
        card_holder_name: 'GIOVANA M CALDEIRA',
        card_number: '4716920315660197',
        billing: {
          name: 'House',
          address: {
            city: 'Belo Horizonte',
            state: 'mg',
            country: 'br',
            neighborhood: 'Céu Azul',
            street: 'Rua Rosa Carrieri Mancini',
            street_number: '720',
            zipcode: '81925620',
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
              number: '60455786003',
            },
          ],
          email: 'ggiovanamarinacaldeira@mailinator.com',
          name: 'Giovana Marina Caldeira',
          external_id: '1213',
          phone_numbers: ['+553133334444'],
          type: 'individual',
          birthday: '1990-05-06',
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
    // https://www.4devs.com.br/gerador_de_numero_cartao_credito
    const [error, newTransaction] = await promised(
      transactions?.create({
        payment_method: 'credit_card',
        amount: 1000,
        card_cvv: '479',
        card_expiration_date: '0422',
        card_holder_name: 'GIOVANA M CALDEIRA',
        card_number: '4716920315660197',
        billing: {
          name: 'House',
          address: {
            city: 'Belo Horizonte',
            state: 'mg',
            country: 'br',
            neighborhood: 'Céu Azul',
            street: 'Rua Rosa Carrieri Mancini',
            street_number: '720',
            zipcode: '81925620',
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
          email: 'ggiovanamarinacaldeira@mailinator.com',
          name: 'Giovana Marina Caldeira',
          external_id: '1213',
          phone_numbers: ['+553133334444'],
          type: 'individual',
          birthday: '1990-05-06',
        },
      })
    );
    if (error) {
      console.log(error.response.errors);
    }
    expect(newTransaction.status).toBe('refused');
  });
});
