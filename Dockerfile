FROM node:12.19-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:dev"]