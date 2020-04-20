export interface PagarmeClientOnboardingQuestionsInterface {
  /**
   * `GET /onboarding_questions/:id`
   * Return the onboarding question requested.
   *
   * @param {Object} opts   An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @param {String} body.id The question Id
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  find(opts: {}, body: {}): Promise<any>;
}
