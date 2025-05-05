FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install express
CMD ["node", "app-v1.js"]
