export interface PagarmeClientCardsInterface {
  /**
   * `GET /cards`
   * Makes a request to /cards or to /cards/:id
   *
   * @param {Object} opts An options params which
   *                      is usually already bound
   *                      by `connect` functions.
   *
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-um-cartão-salvo-1|API Reference for this payload}
   * @param {Number} [body.id] The cards's ID. If not sent a
   *                           cards list will be returned instead.
   * @param {Number} [body.count] Pagination option to get a list of cards.
   *                              Number of cards in a page
   * @param {Number} [body.page] Pagination option for a list of cards.
   *                             The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /cards`
   * Makes a request to /cards
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-todos-os-cartões|API Reference for this payload}
   * @param {Number} [body.count] Pagination option to get a list of cards. Number of cards in a page
   * @param {Number} [body.page] Pagination option for a list of cards. The page index.
   */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /cards`
   * Creates a card from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#criando-um-cartao|API Reference for this payload}
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;
}
