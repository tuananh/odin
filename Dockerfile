FROM node:10-slim

COPY . /app

WORKDIR /app

RUN apt-get update \
    && apt-get install -qq build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

RUN npm i

CMD ["npm", "start"]
