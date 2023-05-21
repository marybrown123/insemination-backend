FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN yarn

COPY . .

RUN npx prisma generate

RUN yarn build

CMD [ "node", "dist/main.js" ]