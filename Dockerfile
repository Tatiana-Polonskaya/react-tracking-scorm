FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . /app

EXPOSE 5173

CMD [ "npm", "run", "dev" ]


