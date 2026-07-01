FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

RUN cp node_modules/sql.js/dist/sql-wasm.wasm .output/server/_libs/sql-wasm.wasm

ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 7860

CMD ["node", ".output/server/index.mjs"]
