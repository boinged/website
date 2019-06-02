FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY dist .
COPY node_modeules .
COPY public .
COPY package.json .

RUN npm prune --production

EXPOSE 8080

CMD [ "npm", "start" ]
