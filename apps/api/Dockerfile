FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/
COPY apps/web/package*.json ./apps/web/
RUN npm install
COPY apps/api ./apps/api
COPY apps/web ./apps/web
ARG DATABASE_URL=postgresql://ai_ecommerce:ecom123@postgres:5432/ai_ecommerce?schema=public
ENV DATABASE_URL=${DATABASE_URL}
RUN npm run db:generate --workspace=@ai-ecommerce/api 
EXPOSE 4000
CMD ["npm", "run", "dev", "--workspace=@ai-ecommerce/api"]