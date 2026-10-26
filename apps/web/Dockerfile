FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
COPY apps/web/package*.json ./apps/web/
RUN npm install
COPY apps/web ./apps/web
COPY apps/api ./apps/api
EXPOSE 5173
CMD ["npm", "run", "dev", "--workspace=@ai-ecommerce/web", "--", "--host", "0.0.0.0"]