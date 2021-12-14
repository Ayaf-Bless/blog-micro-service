FROM node:alpine
RUN npm install -g nodemon

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "start"]
