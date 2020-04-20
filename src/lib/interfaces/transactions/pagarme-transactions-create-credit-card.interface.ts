export interface PagarmeTransactionsCreateCreditCardInterface {
  /**
   * Método de pagamento: credit_card ou boleto
   */
  payment_method: 'credit_card';

  /**
   * Informações do cartão do cliente criptografadas em sua aplicação. OBS: apenas para transações de Cartão de crédito
   * você deve passar o card_hash ou card_id. Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável.
   */
  card_hash: string;

  /**
   * Ao realizar uma transação, retornamos o card_id do cartão, para que nas próximas transações ele possa ser utilizado como forma
   * de identificar os dados de pagamento. Exemplo de utilização: One-click buy. OBS: apenas para transações de Cartão de crédito
   * você deve passar o card_hash ou card_id. Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável.
   */
  card_id: string;

  /**
   * Nome do portador do cartão. OBS: apenas para transações de Cartão de crédito você deve passar o card_holder_name
   */
  card_holder_name: string;

  /**
   * Data de validade do cartão no formato MMAA. OBS: apenas para transações de Cartão de crédito você deve passar o card_expiration_date
   */
  card_expiration_date: string;

  /**
   * Número do cartão. OBS: apenas para transações de Cartão de crédito você deve passar o card_number
   */
  card_number: string;

  /**
   * Código verificador do cartão. OBS: apenas para transações de Cartão de crédito você deve passar o card_cvv
   */
  card_cvv: string;

  /**
   * Utilize false caso queira manter o processamento síncrono de uma transação. Ou seja, a resposta da transação é recebida na hora.
   */
  async?: boolean;

  /**
   * Número de parcelas da transação, sendo mínimo: 1 e Máximo: 12. OBS: Se o pagamento for boleto, o padrão é 1
   */
  installments?: number;
}
