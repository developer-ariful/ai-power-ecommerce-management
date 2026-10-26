# AI E-Commerce Management System

Monorepo foundation using React, Vite, TypeScript, Tailwinnd CSS, Express, Prisma, PostgreSQL, and Docker Comose

## Prerequistes
- Node.js 22 LTS (or compatible supported LTS release)
- npm
- Docker Desktop or Docker Engine with Compose
- Git
## Fist-time Setup
1. Copy `.env.example` to `.env` .
2. Replace the local database password with a strong development password.
3. Install dependencies: `npm install`.
4. Start service: `docker compose up --build`
5. In another teminal, apply the first database migration:
        `npm run db:migrate --workspace=@ai-ecommerce/api -- --name init`.
6. Verify:
    - Frontend: https://localhost:5173
    - API: http://localhost:400/api/v1/health
    - Database check: http://localhost:4000/api/v1/health/databse
    
    The Copose API container uses the hostname `postgres` to reach PostgreSQL. When renning the API directly on your host, use `localhost` in `DATABASE_URL`.


## Local development without Docker
1. Ensure PostgreSQL is running and `.env` has a valid host `DATABASE_URL`.
2. Run `npm install`.
3. Run `npm run db:generate`.
4. Run `npm run dev`.


## Common Commands
- `npm run dev` : start API and frontend on the host.
- `dsocker compose up --build`: start all containers.
- `docker compose down`: stop conainters (keeps database volume)
- `docker compose down -v`: stop and delete the local databse volume (destructive).
- `npm run db:generate`: generate Prisma Client
- `npm run db:migrate --workspace=@ai-ecommerce/api -- --name init`: create/apply a development migration.
- `npm run db:studio`: open Prisma Studio.

## Notes
- `.env` is local-only and must not be committed
- For production, use separate secretes, handened container settings, a non-development server command, and reviewed database migrations.
- See `docs/` for requirements, architecture, data model, and workflow.