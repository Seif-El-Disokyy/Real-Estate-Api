FROM node:16

WORKDIR /app

RUN apt-get update && apt-get install -y sqlite3

COPY package*.json ./
RUN npm install sqlite3 --save
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]