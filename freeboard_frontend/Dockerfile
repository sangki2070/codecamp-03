FROM node:16

WORKDIR /freeboard_frontend/
COPY ./package.json /freeboard_frontend/
RUN yarn install

COPY . /freeboard_frontend/
RUN yarn build:ssr
RUN mkdir -p ./public/ssr/_next
RUN mv ./.next/static ./public/ssr/_next/static

CMD yarn start