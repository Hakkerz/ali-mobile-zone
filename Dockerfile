FROM node:22-slim

WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++ git && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 7860

ENV NODE_ENV=production
ENV HOST=0.0.0.0

CMD ["node", ".output/server/index.mjs"]
