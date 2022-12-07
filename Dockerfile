FROM node:19.1

WORKDIR /app

# Copying source code
COPY src/controllers/* ./src/controllers/
COPY src/models/* ./src/models/
COPY src/routes/* ./src/routes/
COPY src/services/* ./src/services/
COPY src/utils/* ./src/utils/
COPY src/app.ts ./src/
COPY src/server.ts ./src/
# Copying test
COPY tests/routes/* ./tests/routes/
# Copying package*.json, .env and jest.config.js
COPY *.json ./
COPY .env ./
COPY jest.config.js ./

RUN npm install

CMD npm run start
