FROM node:19.9.0

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
