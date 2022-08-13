FROM node:16.16-alpine AS builder
RUN apk --no-cache add git

WORKDIR /usr/src/server
COPY server/ .
RUN npm ci
RUN npm run build
RUN npm ci --omit=dev

WORKDIR /usr/src/client
copy client/ .
RUN npm ci
RUN npm run build

FROM node:16.16-alpine
RUN apk add --no-cache tini
WORKDIR /usr/src/app

COPY --from=builder /usr/src/server/node_modules node_modules
COPY --from=builder /usr/src/server/dist/src dist
COPY --from=builder /usr/src/client/dist public

USER node
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "-r", "source-map-support/register", "dist/index.js"]
