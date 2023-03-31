FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]