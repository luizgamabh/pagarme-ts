export interface PagarmeClientTransfersInterface {
  /**
   * `GET /transfers`
   * Makes a request to /transfers or to /transfers/:id
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#vendo-dados-de-uma-transferência|API Reference for this payload}
   * @param {Number} [body.id] The transfer's ID. If not sent a transfers list will be returned instead.
   * @param {Number} [body.count] Pagination option to get a list of transfers. Number of transfers in a page
   * @param {Number} [body.page] Pagination option for a list of transfers. The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /transfers`
   * Makes a request to /transfers to get all transfers.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#vendo-dados-de-várias-transferências|API Reference for this payload}
   * @param {Number} [body.count] Pagination option to get a list of transfers. Number of transfers in a page
   * @param {Number} [body.page] Pagination option for a list of transfers. The page index.
   */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /transfers`
   * Creates a transfer from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#criando-uma-transferência|API Reference for this payload}
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /transfers/:id/cancel`
   * Cancels a transfer
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#cancelando-uma-transferência|API Reference for this payload}
   * @param {Number} body.id The transfer's ID
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  cancel(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /transfers/days`
   * Returns company's transfers aggregated by day
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   */
  days(opts: {}): Promise<any>;

  /**
   * `GET /transfers/limits`
   * Returns company's transfers limits
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The params for the request
   * @param {String} body.recipient_id The recipient id
   */
  limits(opts: {}, body: {}): Promise<any>;
}
