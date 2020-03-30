import { IPagarMeAccessData } from '../interfaces/pagar-me.interface';

export class PagarMeFactory {
  constructor(public readonly accessData: IPagarMeAccessData) {}

  printAccessData(): IPagarMeAccessData {
    return this.accessData;
  }
}
