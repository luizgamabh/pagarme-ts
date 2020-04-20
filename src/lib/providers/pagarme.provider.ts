import pagarme from 'pagarme';
import {
  PagarMeAccessDataInterface,
  PagarMeModelInterface,
} from '../interfaces';
import { promised } from '../utils/promised';
import { PagarmeModel } from '../models/pagarme.model';

export class Pagarme {
  model: PagarMeModelInterface = new PagarmeModel();

  get client() {
    return this.model?.client;
  }

  get validate() {
    return this.model?.validate;
  }

  get postback() {
    return this.model?.postback;
  }

  constructor(private readonly accessData: PagarMeAccessDataInterface) {}

  async connect(): Promise<PagarMeModelInterface> {
    const [error, client] = await pagarme.client
      .connect(this.accessData)
      .then((client: any) => [null, client])
      .catch((error: any) => [error, null]);
    if (error) {
      throw new Error('Authentication error');
    }
    this.model.client = client;
    const [err] = await promised(this.model.client?.transactions?.all());
    if (err) {
      throw new Error(err.message || 'Error');
    }
    return this.model;
  }
}
