export interface PagarmeClientOrdersInterface {
  /**
   * `GET /orders`
   * Makes a request to /orders to get all orders.
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} body
   * @param {Number} [body.id] The orders ID. If not sent a orders list will be returned instead.
   * @param {Number} [body.count] Pagination option for orders list. Number of orders in a page
   * @param {Number} [body.page] Pagination option for orders list. The page index.
   * @param {Number} [body.status] The paymentLinks Status. If not sent a orders list will be returned instead.
   * @param {Number} [body.payment_link_id] The paymentLinks ID. If not sent a orders list will be returned instead.
   */
  all(opts: {}, body: {}): Promise<any>;
}
