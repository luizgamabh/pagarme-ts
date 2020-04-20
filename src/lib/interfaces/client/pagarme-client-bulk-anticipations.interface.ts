export interface PagarmeClientBulkAnticipationsInterface {
  /**
   * `GET /recipients/:recipient_id/bulk_anticipations`
   * Makes a request to /recipients/:recipient_id/bulk_anticipations
   * or to /recipients/:recipient_id/bulk_anticipations/:id
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-todas-as-antecipações|API Reference for this payload}
   * @param {String} body.recipientId The recipient ID.
   * @param {String} [body.id] The bulkAnticipation ID. If not sent a bulkAnticipation list will be returned instead.
   * @param {Number} [body.count] Pagination option for bulkAnticipation list. Number of bulkAnticipation in a page
   * @param {Number} [body.page] Pagination option for bulkAnticipation list. The page index.
   */
  find(opts: {}, body: {}): Promise<any>;

  /* Missing doc */
  all(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /recipients/:recipient_id/bulk_anticipations`
   * Creates a bulkAnticipation from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#criando-uma-antecipação|API Reference for this payload}
   * @param {String} body.recipientId The recipient ID.
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `PUT /recipients/:recipient_id/bulk_anticipations/:id`
   * Updates a bulkAnticipation from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {String} body.recipientId The recipient ID.
   * @param {String} body.id The bulkAnticipation Id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  update(opts: {}, body: {}): Promise<any>;

  /**
   * `DELETE /recipients/:recipient_id/bulk_anticipations/:id`
   * Deletes a bulkAnticipation.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#deletando-uma-antecipação-building|API Reference for this payload}
   * @param {String} body.recipientId The recipient ID.
   * @param {String} body.id The bulkAnticipation Id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  destroy(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /recipients/:recipient_id/bulk_anticipations/limits`
   * Get bulk anticipations limits for a recipient.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#obtendo-os-limites-de-antecipação|API Reference for this payload}
   * @param {String} body.recipientId The recipient ID.
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  limits(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /recipients/:recipient_id/bulk_anticipations/:id/days`
   * Get bulk anticipations days.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {String} body.recipientId The recipient ID.
   * @param {String} body.id The bulkAnticipation Id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  days(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /recipients/:recipient_id/bulk_anticipations/:id/confirm`
   * Confirm a bulk anticipation.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * {@link https://pagarme.readme.io/v1/reference#confirmando-uma-antecipação-building|API Reference for this payload}
   * @param {String} body.recipientId The recipient ID.
   * @param {String} body.id The bulkAnticipation Id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  confirm(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /recipients/:recipient_id/bulk_anticipations/:id/cancel`
   * Cancel a bulk anticipation.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {String} body.recipientId The recipient ID.
   * @param {String} body.id The bulkAnticipation Id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  cancel(opts: {}, body: {}): Promise<any>;
}
