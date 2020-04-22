import { PagarmeTransactionsSplitRulesInterface } from './pagarme-transactions-split-rules.interface';

export interface PagarmeTransactionsCreateInterface {
  /**
   * Valor a ser cobrado. Deve ser passado em centavos. Ex: R$ 10.00 = 1000. Deve ser no mínimo 1 real (100)
   */
  amount: number;

  /**
   * Endpoint do seu sistema que receberá informações a cada atualização da transação.
   * Caso você defina este parâmetro, o processamento da transação se torna assíncrono.
   */
  postback_url?: string;

  /**
   * Descrição que aparecerá na fatura depois do nome de sua empresa. Máximo de 13 caracteres, sendo alfanuméricos e espaços.
   */
  soft_descriptor?: string;

  /**
   * Após a autorização de uma transação, você pode escolher se irá capturar ou adiar a captura do valor.
   * Caso opte por postergar a captura, atribua o valor false.
   */
  capture?: string;

  /**
   * Regras de divisão da transação
   */
  split_rules?: PagarmeTransactionsSplitRulesInterface[];

  /**
   * Define os dados de envio da compra, como nome do recebedor, valor do envio e endereço de recebimento. Deve ser preenchido no caso da venda de bem físico
   */
  shipping?: {
    [key: string]: any; // TODO: @pagarme-team {https://docs.pagar.me/reference#criar-transacao}
  };

  /**
   * Você pode passar dados adicionais na criação da transação para facilitar uma futura
   * análise de dados tanto em nossa dashboard, quanto por seus sistemas.
   * Ex: metadata[ idProduto ]=13933139
   */
  metadata?: {
    [key: string]: any;
  };

  /**
   * Valor único que identifica a transação para permitir uma nova tentativa de requisição
   * com a segurança de que a mesma operação não será executada duas vezes acidentalmente.
   */
  reference_key?: string;

  /**
   * Valor único que identifica a sessão do usuário acessando o site. Máximo de 100 caracteres
   */
  session?: string;

  /**
   * Data e hora do dispositivo que está efetuando a transação. Deve ser enviado no seguinte
   * formato: yyyy-MM-dd'T'HH:mm:ss'Z. Por exemplo: 2017-10-31T14:53:00.000Z. OBS.: este campo é
   * necessário para transações de mundo físico (com método de captura EMV e Magstripe)
   */
  local_time?: string;
}
