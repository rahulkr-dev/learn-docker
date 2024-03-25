FROM node:20-alpine

WORKDIR /web_app

COPY package*.json ./

RUN npm install

COPY . .


CMD ["npm","run","dev"]