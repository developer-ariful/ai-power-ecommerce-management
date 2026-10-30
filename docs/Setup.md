# Local Setup and Troubleshooting

## Environment file
Copy `.env.example` to `.env` and use a strong local-only password. Compose reads variables form `.env`.

## Start Docker Services
```bash
docker compose config
docker compose up --build
```

## Run the first Prisma migration
After the containers are up, open a second terminal in the repository root:
```bash
npm run db:migrate --workspace=@ai-ecommerce/api -- --name init
```
This generates a migration and applies it to the Compose PostgreSQL database.

## Verify
- API health: `http://localhost:4000/api/v1/health`
- Database health: `http://localhost:4000/api/v1/health/databse`
- Frontend: `http://localhost:5173`

## Common issues
- Port is use: change `API_PORT`, `WEB_PORT`, Or `POSTGRES_PORT` in `.env`
- Database not ready: wait for `docker compose ps` to show PostgreSQL healthy.
- Prisma client missing: run `npm run db:generate`
- API cannot reach DB inside Compose: `DATABASE_URL` must use host `postgres`, not `localhost`.
- Browser cannot reach API: the frontend uses `http://localhost:4000` because browser requests originate from the host.