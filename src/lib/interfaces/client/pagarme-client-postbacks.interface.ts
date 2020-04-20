export interface PagarmeClientPostbacksInterface {
  /**
   * `GET /:model/:model_id/postbacks`
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-um-postback|API Reference for this payload}
   * @param {Number} [body.id] The operation ID. If not sent a
   * @param {Number} [body.transactionId] A transaction ID to get all the operations.
   * @param {Number} [body.subscriptionId] A subscription ID
   */
  find(opts: {}, body: {}): Promise<any>;

  /**
   * `POST /:model/:model_id/postbacks/:id/redeliver`
   * Redeliver a POSTback for a model
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#reenviando-um-postback|API Reference for this payload}
   * @param {Number} body.id The operation ID.
   * @param {Number} body.subscriptionId A subscription ID
   */
  redeliver(opts: {}, body: {}): Promise<any>;
}
