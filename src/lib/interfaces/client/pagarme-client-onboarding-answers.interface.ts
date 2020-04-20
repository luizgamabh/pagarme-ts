export interface PagarmeClientOnboardingAnswersInterface {
  /**
   * `POST /onboarding_answers`
   * Creates a onboarding answer from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  create(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /onboarding_answers`
   * Makes a request to /onboarding_answers to get all answers
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @returns {Promise} Resolves to the result of the request or to an error.
   * // TODO: Check if is there a second param
   */
  all(opts: {}): Promise<any>;

  /**
   * `DELETE /onboarding_answers/:id`
   * Deletes an onboarding answer
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body
   * @param {String} [body.id] - The onboarding answer ID.
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  destroy(opts: {}, body: {}): Promise<any>;
}
