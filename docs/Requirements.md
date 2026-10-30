# Requirements - AI E-Commerce Management System

## 1. Purpose
Build a maintainable e-commerce management platform for managing products, inventory, customers, orders, and AI-assisted workflows

## 2. Initial Scope (Foundation release v0.1.0)
- Monorepo with React/Vite/TypeScript Frontend and Express/TypeScript API.
- Tailwind CSS as the frontend styling framework.
- PostgreSQL runs in Docker Compose.
- Prisma provides typed database access and migrations.
- Health endpoints verify API and database connectivity.
- Documentation and Git workflow are version controlled.

## 3. Functional requirements
### Foundation
- FR-001: The frontend shall render a basice application page.
- FR-002: The API Shall expose `GET /api/v1/health`.
- FR-003: The API shall expose `GET /api/v1/health/database` to test PostgreSQL connectivity.
- FR-004: Docker Copse shall run PostgreSQL, API and Frontend services.
- FR-005: The project shall provide Prisma schema and migration commands.

### Planned business modules
- FR-101: Administrators can manage users, roles and permissions.
- FR-102: Authorized staff can create, update, archive and browse products.
- FR-103: Products can be assigned to categories and later brands/variants/images.
- FR-104: Inventory movements shall be recorded and protected against invalid stock changes.
- FR-105: Customers can create carts and place orders.
- FR-106: Order items shall preserve purchase-time product name, SKU, and unit price.
- FR-107: Orders shall support payment and fulfillment status tracking.
- FR-108: AI features may assist with search, support, and recommendations through permission-checked application services.

## 4. Non-Functional requirements
- NFR-001: Use TypeScript with strict checking.
- NFR-002: Keep business rules in services, not  HTTP controllers.
- NFR-003: Validate untrusted input at API boundaries.
- NFR-004: Keep secrets in environment variables; never commit `.env`.
- NFR-005: User database transactions for operations that update orders and inventory together.
- NFR-006: Order items shall preserve purchase-time product name, SKU, and unit price.
- NFR-007: Orders shall support payment and fulfillment status tracking.
- NFR-008: Use automated tests and CI before release.

## 5. User roles (planned)
- Guest: browse public products.
- Customer: manage own profile, cart and orders.
- Catalog Manager: manage products and categories.
- Inventory Manager: manage stock and inventory movements.
- Order Manager: process and fulfil orders.
- Administrator: manage users, roles, permissions and configuration.
- AI Assistant: a constrained system actor that invokes explicitly permitted tools only. 

## 6. Business rules
- Products referenced by historical orders should be archived/soft-deleted rather than hard-deleted.
- Order item prices must be snapshots, not dynamically read from current product prices.
- Inventory changes must be auditable.
- Only authorized roles may perform privileged actions.
- Payment status must not be treated as proof of payment without confirmation from a trusted payment provider.