FROM node:alpine

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN yarn install

RUN yarn run build

EXPOSE 3000

CMD yarn run start
