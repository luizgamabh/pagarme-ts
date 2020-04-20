export interface PagarmeClientSubscriptionsInterface {
  /**
   * `GET /subscriptions`
   * Makes a request to /subscriptions to get all subscriptions.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body
   * @param {Number} [body.count] Pagination option to get a list of subscriptions. Number of subscriptions in a page
   * @param {Number} [body.page] Pagination option for a list of subscriptions. The page index.
   */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /subscriptions`
   * Makes a request to /subscriptions or to /subscriptions/:id
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-uma-assinatura|API Reference for this payload}
   * @param {Number} [body.id] The subscription's ID. If not sent a subscriptions list will be returned instead.
   * @param {Number} [body.count] Pagination option to get a list of subscriptions. Number of subscriptions in a page
   * @param {Number} [body.page] Pagination option for a list of subscriptions. The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /* Missing docs */
  findAll(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /subscriptions`
   * Creates a subscription from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#criando-assinaturas|API Reference for this payload}
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `PUT /subscriptions/:id`
   * Updates a subscription from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#atualizando-uma-assinatura|API Reference for this payload}
   * @param {Number} body.id The subscription's ID
   * @returns {Promise} A promise that resolves to the newly created subscriptions's data or to an error.
   */
  update(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /subscriptions/:id/cancel`
   * Cancels a subscription
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#cancelando-uma-assinatura|API Reference for this payload}
   * @param {Number} body.id The subscription's ID
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  cancel(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /subscriptions/:id/transactions`
   * Creates a transaction for a subscription
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {Number} body.id The subscription's ID
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  createTransaction(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /subscriptions/:id/transactions`
   * Gets transactions for a subscription
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#transações-em-uma-assinatura|API Reference for this payload}
   * @param {Number} body.id The subscription's ID
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  findTransactions(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /subscriptions/:id/settle_charge`
   * Skips the next x charges for a subscription
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://docs.pagar.me/reference#pulando-cobranças|API Reference for this payload}
   * @param {Number} body.id The subscription's ID
   * @returns {Promise} A promise that resolves to the subscription whose id was passed on the request body or to an error.
   */
  settleCharge(opts: {}, body: {}): Promise<any>;
}
