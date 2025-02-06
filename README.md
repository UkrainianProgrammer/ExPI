# ExPI
REST API built using Typescript &amp; Express.

A few notes:

* Services folder which contains independent subparts of the application
    like users, products and so on.
* Middleware folder has logic for handling cors, errors, logging, security, etc.
    To apply our middleware, we will create a function which grabs this list of middleware and applies it on a router.