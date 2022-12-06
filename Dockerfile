FROM node:19.1
WORKDIR /app

COPY src/controllers/* ./src/controllers/
COPY src/models/* ./src/models/
COPY src/routes/* ./src/routes/
COPY src/services/* ./src/services/
COPY src/utils/* ./src/utils/
COPY src/app.ts ./src/
COPY src/server.ts ./src/
# package.json and .env will be loaded
COPY *.json ./
COPY .env ./.env

RUN npm install

CMD npm run start