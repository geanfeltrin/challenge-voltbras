FROM node:14.15.0-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
COPY yarn.lock /app
COPY prisma /app
RUN yarn

RUN yarn generate

# Bundle app source
COPY . /app
RUN yarn build

EXPOSE 4000
CMD './scripts/start.sh'
