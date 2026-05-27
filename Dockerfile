# syntax=docker/dockerfile:1.6

# ─── Build stage ──────────────────────────────────────────────────────────────
# Compile the Vite app and emit static assets into /app/dist.
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first so this layer caches when only source changes.
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source and build.
COPY . .
RUN npm run build

# ─── Runtime stage ────────────────────────────────────────────────────────────
# Serve dist/ with nginx. Listens on $PORT (Cloud Run convention; defaults 8080).
FROM nginx:1.27-alpine

# nginx:alpine watches /etc/nginx/templates/*.template and runs envsubst on
# startup, writing the result to /etc/nginx/conf.d/. Template-vars referenced
# with ${VAR} get substituted; nginx's own $uri / $host (no braces, and not
# in the container env) are left untouched.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Strip the default site so only our template is active.
RUN rm -f /etc/nginx/conf.d/default.conf

# Drop the built static assets into the nginx web root.
COPY --from=build /app/dist /usr/share/nginx/html

ENV PORT=8080
EXPOSE 8080
