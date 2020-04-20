export interface PagarmeClientGatewayOperationsInterface {
  /**
   * `GET /:model/:model_id/operations`
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * {@link https://pagarme.readme.io/v1/reference#retornando-todo-histórico-de-uma-transação|API Reference for this payload}
   * @param {Number} [body.id] The operation ID. If not sent, all operations of a transaction will be returned.
   * @param {Number} [body.transactionId] A transaction ID to get all the operations.
   * @param {Number} [body.subscriptionId] A subscription ID
   */
  find(opts: {}, body: {}): Promise<any>;

  /**
   * `GET /:model/:model_id/operations/:id/refuse_message`
   * Returns the refuse message for a gateway operation
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body The payload for the request.
   * @param {Number} body.id The operation ID.
   * @param {Number} [body.subscriptionId] A subscription ID
   */
  refuseMessage(opts: {}, body: {}): Promise<any>;
}
