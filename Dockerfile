# ---- Build Stage ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy source
COPY . .

RUN npm run build

# ---- Runtime Stage ----
FROM node:20-alpine

WORKDIR /app

# Copy only necessary files (no dev deps, no ts)
COPY --from=builder /app/dst ./dst
COPY --from=builder /app/package*.json ./

# Install only production deps
RUN npm install --omit=dev

# Avoid memory leakage defaults
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=512"

# Run app
CMD ["node", "dst/app.js"]
