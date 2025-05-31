module.exports = {
  HTTP_CODES: {
    // 2xx Success
    ok: 200,
    created: 201,
    accepted: 202,
    noContent: 204,

    // 3xx Redirection
    movedPermanently: 301,
    found: 302,
    notModified: 304,

    // 4xx Client Errors
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    requestTimeout: 408,
    conflict: 409,
    tooManyRequests: 429,

    // 5xx Server Errors
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504
  }
};
