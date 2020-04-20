export interface PagarmeClientAcquirersConfigurationsInterface {
  /**
   * `GET /acquirers_configurations`
   * Makes a request to /acquirers_configurations
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * @param {Number} [body.count] Pagination option to get a list of acquirer's configurations. Number of configurations in a page
   * @param {Number} [body.page] Pagination option for a list of acquirer's configurations. The page index.
   */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /acquirers_configurations`
   * Makes a request to /acquirers_configurations or to /acquirers_configuration/:id
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * @param {Number} [body.id]  The acquirer's configuration ID. If not sent a list of acquirer's configuration will be returned instead.
   * @param {Number} [body.count] Pagination option to get a list of acquirer's configurations. Number of configurations in a page
   * @param {Number} [body.page] Pagination option for a list of acquirer's configurations. The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /* Missing docs */
  findAll(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /acquirers_configurations`
   * Creates an acquirer's configuration from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `PUT /acquirers_configuration/:id`
   * Updates an acquirer's configuration from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {Number} body.id The acquirer's configuration ID
   * @returns {Promise} A promise that resolves to the newly created acquirer's configurations data or to an error.
   */
  update(opts: {}, body: {}): Promise<any>;
}
