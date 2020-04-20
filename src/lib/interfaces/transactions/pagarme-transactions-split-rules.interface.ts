export interface PagarmeTransactionsSplitRulesInterface {
  /**
   * Se o recebedor é responsável ou não pelo chargeback. Default true para todos os recebedores da transação.
   */
  liable: boolean;

  /**
   * Se o recebedor será cobrado das taxas da criação da transação. Default true para todos os recebedores da transação.
   */
  charge_processing_fee: boolean;

  /**
   * Qual a porcentagem que o recebedor receberá. Deve estar entre 0 e 100. Se amount já está preenchido, não é obrigatório
   */
  percentage: string;

  /**
   * Qual o valor da transação o recebedor receberá. Se percentage já está preenchido, não é obrigatório
   */
  amount: string;

  /**
   * Se o recebedor deverá pagar os eventuais restos das taxas, calculadas em porcentagem. Sendo que o default vai para o primeiro recebedor definido na regra.
   */
  charge_remainder_fee: boolean;

  /**
   * Id do recebedor
   */
  recipient_id: string;
}
