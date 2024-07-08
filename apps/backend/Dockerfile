FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
ARG NODE_ENV production
ENV NODE_ENV=${NODE_ENV}

RUN npm install -g turbo

RUN corepack enable
COPY . .
RUN npm turbo prune --scope=backend --docker

RUN npm install

RUN npm run build --filter=backend

EXPOSE 1337

CMD cd apps/backend && npm run start