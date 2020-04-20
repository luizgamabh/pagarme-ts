export interface PagarmeClientCompanySegmentsInterface {
  /**
   * `GET /company_segments`
   * Makes a request to /company_segments
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   */
  all(opts: {}): Promise<any>;
}
