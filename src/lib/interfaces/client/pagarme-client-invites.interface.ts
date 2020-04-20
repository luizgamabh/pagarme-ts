export interface PagarmeClientInvitesInterface {
  /**
   * `GET /invites`
   * Makes a request to /invites or to /invites/:id
   *
   * @param {Object} opts - An options params which is usually already bound by `connect` functions.
   * @param {Object} body - The payload for the request.
   * @param {String} [body.id] - The invite ID. If not sent an invite list will be returned instead
   */
  find(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /invites`
   * Makes a request to /invites to get all invites.
   *
   * @param {Object} opts
   */
  all(opts: {}): Promise<any>;

  /**
   * `POST /invites`
   * Creates an invite from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body A payload that contains email and permission of the invited person.
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `DELETE /invites`
   * Deletes an invite from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body
   * @param {String} [body.id] - The invite ID. If not sent an invite list will be returned instead
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  destroy(opts: {}, body: {}): Promise<any>;
}
