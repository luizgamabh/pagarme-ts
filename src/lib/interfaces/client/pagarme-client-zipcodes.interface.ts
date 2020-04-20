export interface PagarmeClientZipcodesInterface {
  /**
   * `GET /zipcodes`
   * Makes a request to /zipcodes/:zipcode
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://docs.pagar.me/v2017-07-17/reference#consulta-de-cep|API Reference for this payload}
   * @param {String} [body.zipcode] The zipcode you want more information about. If not sent an API error will be returned instead.
   */

  find(opts: {}, body: {}): Promise<any>;
}
