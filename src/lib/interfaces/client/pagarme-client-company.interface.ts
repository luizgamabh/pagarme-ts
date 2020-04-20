export interface PagarmeClientCompanyInterface {
  /**
   * `POST /companies`
   * Creates a company from the given payload
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
   */
  create?(opts: {}, body: {}): Promise<any>;

  createTemporary?(): any;

  /**
   * `POST /companies/activate`
   * Activates a company
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {any} body TODO check with pagarme team
   * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
   */
  activate?(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /company/email_confirmation`
   * Resend account confirmation email to a previously registered company.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {any} body TODO check with pagarme team
   * @param {String} body.email The email address to resend the account confirmation
   * @returns {Promise} A promise that resolves to the send email confirmation company's data or to an error.
   **/
  emailConfirmation?(opts: {}, body: {}): Promise<any>;

  /**
   * `PUT /company`
   * Updates a company from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
   **/
  update?(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /company`
   * Return a company from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
   **/
  current?(opts: {}): Promise<any>;

  /**
   * `PUT /company/reset_keys`
   * Reset the company API keys.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
   **/
  resetKeys?(opts: {}, body: {}): any;

  /**
   * `GET /company/affiliation_progress`
   * Information about the affiliation progress.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
   **/
  affiliationProgress?(opts: {}): Promise<any>;

  /**
   * `PUT /company/branding/:id`
   * Updates a company branding from the given payload.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request
   * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
   **/
  updateBranding?(opts: {}, body: {}): Promise<any>;

  emailTemplates?: {
    /**
     * `GET /company/email_templates/:id`
     * Get emails templates
     *
     * @param {Object} opts An options params which is usually already bound by `connect` functions.
     * @param {Object} body The ID of the email template.
     * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
     **/
    find?(opts: {}, body: {}): Promise<any>;

    /**
     * `PUT /company/email_templates/:id`
     * Updates a company from the given payload.
     *
     * @param {Object} opts An options params which is usually already bound by `connect` functions.
     * @param {Object} body The payload for the request
     * @returns {Promise} A promise that resolves to the newly created company's data or to an error.
     **/
    update?(opts: {}, body: {}): Promise<any>;
  };
}
