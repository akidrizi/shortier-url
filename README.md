# ShorTIER... Get it? 😅

Shortier is a basic URL shortener API that shortens your URLs and is tracking the visits of the generated ones.

The project is written with **TypeScript** and can be deployed with `docker-compose` along with **MySQL** database 
where the generated URLs (_shorten_urls_ table) and analytics (_visits_ table) are stored.

### Usage

> **Note:** in order to have the full production experience as if visiting a real URL Shortener domain you need to edit you `hosts` file.

### Getting Started

### Application Structure

The codebase is located under the `/src` directory:

    ├── /controllers    # Handles the business logic for a request.
    ├── /models         # Sequalize models (typesctipt-sequalize).
    ├── /routes         # Maps logic from controllers to a route. 
    ├── /services       # Common services and handler functions.
    ├── /utils          # Sequalize config & other shared configs.
    ├── app.ts          # Setup express to expose routes. 
    └── server.ts       # Startup server.        

The root directory has all the necessary **NodeJS** files along with `tsconfig.json`, `Dockerfile` and `docker-compose.yml` 
and a `Makefile`.

Additional configuration files for **Nodemon** `nodemon.jom`, **ESLint** `.eslintrc` and **Prettier** `.prettierrc` 
can be found in the root directory. Other dev packages configuration: 

**[husky](https://www.npmjs.com/package/husky)** for `pre-commit` **lint**:
```json
// package.json

"husky": {
    "hooks": {
        "pre-commit": "npm run format && npm run lint"
    }
}
```
**[rimraf](https://www.npmjs.com/package/rimraf)** for cleaning folders before **build**:
```json
// package.json

"scripts": {
    "build": "rimraf ./dist && tsc",
...
```
