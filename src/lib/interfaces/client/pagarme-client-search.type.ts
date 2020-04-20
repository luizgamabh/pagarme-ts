/**
 * `GET /search`
 * Creates a session from the given payload.
 *
 * @param {Object} opts An options params which is usually already bound by `connect` functions.
 * @param {Object} query The ElasticSearch based query object to be sent.
 * {@link https://pagarme.readme.io/v1/reference#elasticsearch|API Reference for this payload}
 * @returns {Promise} Resolves to the result of the request or to an error.
 */

export type PagarmeClientSearchType = (opts: {}, query: {}) => Promise<any>;
