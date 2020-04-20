export interface PagarmeClientRecipientsInterface {
  /**
   * `GET /recipients`
   * Makes a request to /recipients or to /recipients/:id
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-um-recebedor|API Reference for this payload}
   * @param {String} [body.id] The recipient ID. If not sent a recipient list will be returned instead.
   * @param {Number} [body.count] Pagination option for recipient list. Number of recipient in a page
   * @param {Number} [body.page] Pagination option for recipient list. The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /recipients`
   * Makes a request to /recipients to get all recipients.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body Pagination option for recipient list.
   * @param {Number} [body.count] Pagination option for recipient list. Number of recipient in a page
   * @param {Number} [body.page] Pagination option for recipient list. The page index.
   */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /recipients`
   * Creates a recipient from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#criando-um-recebedor|API Reference for this payload}
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `PUT /recipients/:id`
   * Creates a recipient from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#atualizando-um-recebedor|API Reference for this payload}
   * @param {String} body.id The recipient Id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  update(opts: {}, body: {}): Promise<any>;
}
