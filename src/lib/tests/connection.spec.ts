import { Pagarme } from '..';
import { PagarmeModel } from '../models/pagarme.model';

describe('Connection to API', () => {
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
});
