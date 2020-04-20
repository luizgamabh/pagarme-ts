export interface PagarmeClientChargebackOperationsInterface {
  /**
   * `GET /transactions/:transaction_id/chargeback_operations`
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * @param {Number} [body.transactionId] A transaction ID to get all the chargeback operations.
   */
  find(opts: {}, body: {}): Promise<any>;
}
