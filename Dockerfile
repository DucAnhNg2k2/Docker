FROM node:14
WORKDIR /root/dev/node/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]