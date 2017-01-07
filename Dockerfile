FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install --production

# Bundle app source
COPY . /usr/src/app

EXPOSE 1337

CMD ["npm", "run", "start:prod"]
