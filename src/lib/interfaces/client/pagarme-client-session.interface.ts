export interface PagarmeClientSessionInterface {
  /**
   * `POST /sessions`
   * Creates a session from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {String} email The account's email
   * @param {String} password The account's password
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, email: string, password: string): Promise<any>;

  /**
   * `DELETE /sessions/:id`
   * Deletes the session with the given ID
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {String} id The session's id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  destroy(opts: {}, id: string | number): Promise<any>;

  /**
   * `POST /sessions/:id/verify`
   * Verifies a session's password' from the given
   * session_id and possible password.
   *
   * @example
   * client.session.verify({ id: sessionId, password: pwd})
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {String} payload The payload to be sent
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  verify(opts: {}, payload: string): Promise<any>;
}
