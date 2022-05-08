FROM node:14.18.0-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json /opt/app/
RUN npm update --legacy-peer-deps
COPY . /opt/app

WORKDIR /opt/app

CMD ["npm", "start:dev"]