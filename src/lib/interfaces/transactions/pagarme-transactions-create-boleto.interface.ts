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
}
