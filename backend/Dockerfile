# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependency files and install dependencies first for better caching
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# Copy the rest of the source code
COPY index.ts ./
COPY tsconfig.json ./

# Build the application
RUN npm run build

# Stage 2: Production image with minimal footprint
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
RUN npm ci --production
CMD ["node", "dist/index.js"] 