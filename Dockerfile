FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install packages and build our app
RUN npm install
RUN npm run build

# Set our environment variables
ENV NODE_ENV production
ENV PORT 80

EXPOSE ${PORT}

CMD ["npm", "start"]
