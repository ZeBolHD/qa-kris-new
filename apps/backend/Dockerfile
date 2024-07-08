FROM node:18-alpine

# Installing necessary packages including python3-dev for distutils
RUN apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  vips-dev \
  libc6-compat \
  python3 \
  python3-dev

# Updating apk
RUN apk update

# Set working directory
WORKDIR /app

# Set environment variables
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Install global npm packages
RUN npm install -g node-gyp
RUN npm install -g pnpm --force
RUN pnpm install -g turbo
RUN corepack enable

# Copy project files
COPY . .

# Prune dependencies and install
RUN pnpm turbo prune --scope=backend --docker
RUN pnpm install

# Build the project
RUN pnpm run build --filter=backend

# Expose port
EXPOSE 1337

# Start the application
CMD cd apps/backend && pnpm run start
