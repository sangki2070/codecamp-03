FROM node:16

WORKDIR /freeboard_frontend/
COPY ./package.json /freeboard_frontend/
RUN yarn install

COPY . /freeboard_frontend/
RUN yarn build:ssr

CMD yarn dev 