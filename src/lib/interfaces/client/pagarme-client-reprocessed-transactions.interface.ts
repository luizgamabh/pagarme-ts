export interface PagarmeClientReprocessedTransactionsInterface {
  /**
   * `GET /reprocessed_transactions`
   * Find reprocessed transactions
   *
   * @param {Object} opts An options params which is usually already bound by `connect` functions.
   * @param {Object} query The query object to be sent.
   * @param {Object} query
   * @param {Number} query.transaction_id Transaction ID.
   * @param {Number} query.original_transaction_id Original transaction ID.
   * @param {String} query.starting_at Starting at date (eg. 2019-09-06).
   * @param {String} query.ending_at Ending at date (eg. 2036-09-06).
   * @returns {Promise} Resolves to the result of the request or to an error.
   */
  find(opts: {}, query: {}): Promise<any>;
}
