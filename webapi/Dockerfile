from node:22-alpine

ADD . /app

WORKDIR /app

RUN npm ci --omit=dev

CMD npm start