export interface PagarmeClientBalanceOperationsInterface {
  /**
   * `GET /balance/operations`
   * Makes a request to /balance/operations,
   * /balance/operations/:id,
   * /recipients/:recipient_id/balance/operations/ or
   * /recipients/:recipient_id/balance/operations/:id
   * and returns company's balanceOperations or returns a specif company's balanceOperation
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#histórico-específico-de-uma-operação|API Reference for this payload}
   * @param {Number} [body.id] The operations's ID. If not sent a operations list will be returned instead.
   * @param {Number} [body.recipientId] The recipient's ID.
   * @param {String} [body.format] The file extension.
   * @param {Number} [body.count] Pagination option to get a list of operations. Number of operations in a page
   * @param {Number} [body.page] Pagination option for a list of operations. The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /balance/operations`
   * Returns company's balanceOperations
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#histórico-das-operações|API Reference for this payload}
   * @param {Number} [body.count] Pagination option to get a list of operations. Number of operations in a page
   * @param {Number} [body.page] Pagination option for a list of operations. The page index.
   */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /balance/operations/days`
   * Returns a company's balanceOperations aggregated by day
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * // TODO: check if it has second param
   */
  days(opts: {}): Promise<any>;
}
