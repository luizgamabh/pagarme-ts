export interface PagarmeClientSplitRulesInterface {
  /**
   * `GET /transactions/:transactionId/split_rules`
   * Makes a request to /transactions/:transactionId/split_rules or to /transactions/:transactionId/split_rules/:id
   *
   * @param {Object} opts - An options params which is usually already bound by `connect` functions.
   * @param {Object} body - The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-as-regras-de-divisão-de-uma-transação|API Reference for this payload}
   * @param {Number} body.transactionId - A specific transaction ID
   * @param {Number} [body.id] - The splitRule's ID. If not sent, a splitRules list will be returned instead.
   */
  find(opts: {}, body: {}): Promise<any>;
}
