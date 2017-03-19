FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install packages and cache them if package.json is unchanged
COPY package.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build our app
RUN npm run build

# Set our environment variables
ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

CMD ["npm", "start"]