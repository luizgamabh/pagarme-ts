export interface PagarmeClientAcquirersInterface {
  /**
   * `GET /acquirers`
   * Makes a request to /acquirers
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * @param {Number} [body.count] Pagination option to get a list of acquirers Number of acquirers in a page.
   * @param {Number} [body.page] Pagination option for a list of acquirers. The page index.
   */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /acquirers`
   * Makes a request to /acquirers or to /acquirers/:id
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * @param {Number} [body.id]  The acquirer's ID. If not sent a list of acquirer will be returned instead.
   * @param {Number} [body.count] Pagination option to get a list of acquirers. Number of acquirers in a page.
   * @param {Number} [body.page] Pagination option for a list of acquirers. The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /* Missing docs */
  findAll(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /acquirers`
   * Creates an acquirer from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `PUT /acquirers/:id`
   * Updates an acquirer from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {Number} body.id The acquirer's ID
   * @returns {Promise} A promise that resolves to the newly created acquirer's data or to an error.
   */
  update(opts: {}, body: {}): Promise<any>;

  /**
   * `PUT /acquirers/:id/anticipation_delay/:delay`
   * Updates an acquirer anticipation from the given delay.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {Number} body.id The acquirer's ID
   * @param {Number} body.delay The acquirer's anticipation delay
   * @returns {Promise} A promise that resolves to the newly created acquirer's data or to an error.
   */
  updateAnticipationDelay(opts: {}, body: {}): Promise<any>;
}
