# Architecture - AI E-Commerce Management System

## 1. Arhitectural style
Start as a modular monolith in a single repositoryy. Split services only when operational needs justify the added complexity.

## 2. Repository Layout
- `apps/web`: React, Vite, Typescript, Tailwind CSS.
- `apps/api`: Node.js, Express, TypeScript, Prisma.
- `apps/api/prisma`: Prima schema and migrations.
- `docs`: product, architecture, data model, workflow, and setup documentation.
- `docker-compose.yml`: local PostgreSQL, API, and frontend services.

## 3. Backend request flow
`HTTP Route ➡️ Middleware ➡️ Controller ➡️ Service ➡️ Repository/Prisma ➡️ PostgreSQL`

- Routes map HTTP methods and URLs to controllers.
- Middleware handles cross-cutingg concerns such as request parsing, security headers, authentication, permissions and request IDs.
- Controllers translate HTTP Requests/Responses; they should not own business rules.
- Services implement use cases and business rules.
- Repositories isolate persistence operations when the module needs a dedicated data-access abstraction.
- Prisma provides typed database access and migration tooling.

## 4. Frontend
- React components render the user interface.
- Tailwind CSS Provides utility-first styling.
- A futurer API client layer should centralize base URLs and error handling.
- Forms should validate input; server-side validation remains authoritative.

## 5. Data infrastructure
- PostgreSQL is the relational system of record.
- Prisma schema is the source for the database model and migrations.
- Docker Compose provides reproducible local development services.
- Future additions may include object storage, Redis, background jobs, and observability.

## 6. Security boundariess
- Keep secrets outside source control.
- Validate all request payloads.
- Enforce authentiation and authorization in the API, not only in the UI.
- Record audit events for sensitive operations.
- AI tools must call permission-checked aplication use cases and must never receive unrestricted database access.

## 7. Error handling and observability
- Future API foundation should and a centralized error handler, consistent response envelope, structurerds logs, request IDs, and automated tests.