Consider the following routes

`GET /` => index
`GET /about` => about page
`GET /login` => login page
`POST /login` => authentication with body
`// Everything from here down is authenticated`
`GET /users?query=Brad` => authenticated with query params
`GET /users/:userId`
`POST /users`
`PUT /users/:userId`
`DEL /users/:userId`

The question becomes, how do we create an executable readable spec based on this
API definition. We want to be able to insert the middleware, routes, handlers,
etc. so that _this_ is our single source of truth.

Question: Can we leverage this to also document our API - we would need to be
able to specify the body shape, query params, etc.

Low level elements:
* root
* path
* param
* query
* body
* header
* middleware
* error middleware
* handler - get, post, delete, etc.
* return type information


```
root('/', [
  get(rootHandler, returns(html("The base single page app"))),
  path('login', [
     get(loginHandler),
     post([
       body({username: isString, password: isString}), authHandler
     ], 
     returns(json({token: String})))
  ]),
  middleware([
    header('x-logged-in'),
    authenticate
  ]),
  path('users', [
    get([
      query(['query']),
      getUsers
    ],
    returns(json([UserResult])),
    post([
      body(UserModel, validators),
      createUser
    ], returns(json(UserResult)))
  ])
]);
```
