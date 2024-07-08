FROM node:18-alpine

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm --force
RUN pnpm install -g turbo
COPY ./package.json ./pnpm-lock.yaml ./
RUN corepack enable

COPY . .

RUN pnpm turbo prune --scope=frontend --docker

RUN pnpm install

RUN pnpm run build --filter=frontend

CMD cd apps/frontend && pnpm start