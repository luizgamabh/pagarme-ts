export interface PagarmeTransactionsFiltersInterface {
  /**
   * Retorna n objetos de transação, com um máximo de 1000
   */
  count?: number;

  /**
   * Útil para implementação de uma paginação de resultados
   */
  page?: number;

  /**
   * Filtro para um dos status: processing, authorized, paid, refunded, waiting_payment, pending_refund, refused
   */
  status?:
    | 'processing'
    | 'authorized'
    | 'paid'
    | 'refunded'
    | 'waiting_payment'
    | 'pending_refund'
    | 'refused';

  /**
   * Filtro para data de criação
   * Todos os filtros mencionados podem ser usados para buscas em ranges usando os prefixos: < > <= >=
   */
  date_created?: string;

  /**
   * Filtro para data de último update
   * Todos os filtros mencionados podem ser usados para buscas em ranges usando os prefixos: < > <= >=
   */
  date_updated?: string;

  /**
   * Filtro pelo valor da transação
   * Todos os filtros mencionados podem ser usados para buscas em ranges usando os prefixos: < > <= >=
   */
  amount?: string;

  /**
   * Filtro de parcelas da transação
   * Todos os filtros mencionados podem ser usados para buscas em ranges usando os prefixos: < > <= >=
   */
  installments?: string;

  /**
   * Filtro de id
   * Todos os filtros mencionados podem ser usados para buscas em ranges usando os prefixos: < > <= >=
   */
  id?: string | number;

  /**
   * Filtro de tid
   * Todos os filtros mencionados podem ser usados para buscas em ranges usando os prefixos: < > <= >=
   */
  tid?: string;

  /**
   * Filtro de nsu
   * Todos os filtros mencionados podem ser usados para buscas em ranges usando os prefixos: < > <= >=
   */
  nsu?: string;

  /**
   * Filtro de nome do detentor do cartão
   */
  card_holder_name?: string;

  /**
   * Filtro dos últimos 4 dígitos do cartão
   */
  card_last_digits?: string;

  /**
   * Filtro da bandeira do cartão: amex, aura, discover, elo, hipercard, jcb, visa, mastercard
   */
  card_brand?: string;

  /**
   * Filtro de postback_url
   */
  postback_url?: string;

  /**
   * Filtro de método de pagamento: credit_card, boleto
   */
  payment_method?: string;

  /**
   * Filtro de método de captura
   */
  capture_method?: string;

  /**
   * Filtro de boleto_url
   */
  boleto_url?: string;

  /**
   * Filtro de score de antifraud
   */
  antifraud_score?: string;

  /**
   * Filtro de subscription
   */
  subscription_id?: string;

  /**
   * Filtro de todos os atributos do cliente
   */
  customer?: object;

  /**
   * Filtro de todos os atributos de endereço
   */
  address?: object;

  /**
   * Filtro de todos os atributos do telefone
   */
  phone?: object;

  /**
   * Filtro de reference_key
   */
  reference_key?: string;

  /**
   * Filtro de order
   */
  order_id?: string;

  /**
   * Filtro de todos os parâmetros de metadata. Depende do metadata.
   */
  metadata?: object;
}
