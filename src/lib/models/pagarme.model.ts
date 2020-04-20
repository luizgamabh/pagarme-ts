import { PagarMeModelInterface } from '../interfaces';

export class PagarmeModel implements PagarMeModelInterface {
  public client = {};
  public transactions = [];
}
