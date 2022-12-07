# ShorTIER... Get it? 😅

Shortier is a basic URL shortener API that shortens your URLs and tracks hits analytics.

The project is written with **TypeScript** and can be deployed with `docker-compose` along with **MySQL**
where the generated URLs (table: _short_urls_) and analytics (table: _stats_) are stored.

## Getting Started

#### Run the application with `docker-compose`

~~~bash
docker-compose up
# or using make with extra logs
make docker
~~~

Edit: `APP_PORT` to change the exposed port in the local machine.

> NOTE: `.env.docker` is used for declaring the environment variables within compose.

#### Run the application locally with `npm`

~~~bash
npm install
npm run start
# or with nodemon
npm install
npm run dev
~~~

Edit: `/src/utils/config.ts` to the proper local configuration.

> NOTE: This requires a local running `mysql` instance.

## Usage

Three endpoints have been exposed.

### Shorten a URL
```JSON
POST /shorten

Request
{
    "url": "http://example.com"
}

Success Response 201
{
    "code": "vBAElVywy",
    "shortUrl": "://.../vBAElVywy"
}
Bad Request 400
```

### Visit a shortened URL
```JSON
GET /:code

Success Response: -> Redirect to original URL
Not Found 404
```
###### `GET /:code`: in local development use IPv4 on browser `GET 127.0.0.1:3000/:code`.

### View stats for a shortened URL
```JSON
GET /:code/stats

Success Response 200
{
    "code": "vBAElVywy",
    "shortUrl": "://.../vBAElVywy",
    "originalUrl": "http://example.com",
    "hits": 123
}
Not Found 404
```

## Application Structure

The codebase is located under the `/src` directory:

    ├── /controllers    # Handles the logic between a request and storage.
    ├── /models         # Sequalize models (typesctipt-sequalize).
    ├── /routes         # Maps logic from controllers to a route.
    ├── /services       # Common services and handler functions.
    ├── /utils          # Sequalize config & other shared configs.
    ├── app.ts          # Setup express to expose routes.
    └── server.ts       # Startup server.

The root directory has all the necessary **NodeJS** files along with `tsconfig.json`, `Dockerfile` & `docker-compose.yml`
and a `Makefile`.

Other dev packages configuration:

**[strong-error-handler](https://www.npmjs.com/package/strong-error-handler)** error handler middleware for cleaner codebase:
```javascript
// app.ts

app.use(
  strongErrorHandler({
    debug: !isProduction(),
    log: isProduction(),
  })
);
```

**[husky](https://www.npmjs.com/package/husky)** for `pre-commit` hooks in installed upon node prepare:
```json
// package.json

"scripts": {
    "prepare": "husky install"
```
###### creates folder `./.husky/_` with the requires shell script.
the node scripts triggered on `pre-commit` can be found here `./.husky/pre-commit`
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run format && npm run lint
```
**[rimraf](https://www.npmjs.com/package/rimraf)** for cleaning folders before **build**:
```json
// package.json

"scripts": {
    "build": "rimraf ./dist && tsc",
...
```

## Testing
