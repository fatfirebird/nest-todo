FROM node:14-alpine AS dev

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn 
COPY . .

RUN yarn build

FROM node:14-alpine AS prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=dev /usr/src/app .

EXPOSE 8080

CMD ["node", "dist/main"]
