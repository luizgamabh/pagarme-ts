import { PagarmeCustomerAddressInterface } from '../customers/pagarme-customer-address.interface';
import { PagarmeTransactionsItemInterface } from './pagarme-transactions-item.interface';
import { PagarmeCustomerInterface } from '../customers/pagarme-customer.interface';

export interface PagarmeTransactionsCreateBoletoInterface {
  /**
   * Método de pagamento: credit_card ou boleto
   */
  payment_method: 'boleto';

  /**
   * Prazo limite para pagamento do boleto. Deve ser passado no formato yyyy-MM-dd.Default: data atual + 7 dias
   */
  boleto_expiration_date: string;

  /**
   * Campo instruções do boleto. Máximo de 255 caracteres
   */
  boleto_instructions?: string;

  /**
   * Obrigatório com o antifraude habilitado. Define os dados de cobrança, como nome e endereço
   */
  billing?: {
    name: string;
    address: PagarmeCustomerAddressInterface;
  };

  /**
   * Obrigatório com o antifraude habilitado. Define os dados dos itens vendidos, como nome, preço unitário e quantidade
   */
  items?: PagarmeTransactionsItemInterface[];

  /**
   * Dados do cliente
   */
  customer?: PagarmeCustomerInterface;
}
