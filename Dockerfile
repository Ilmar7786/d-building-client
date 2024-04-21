FROM node:20-alpine as builder
WORKDIR /web

COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN yarn preview
EXPOSE 5173
ENTRYPOINT ["npm", "start"]
