FROM node:10

WORKDIR /src/app

COPY package*.json ./

RUN apt-get update -y

RUN apt-get install vim -y

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]