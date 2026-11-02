# Data Model - Initial Draft

## 1. Modeling principles
- Use stable primary keys and database constraints.
- Use `createdAt` and `updateAt` on mutable business entities.
- Prefer archiving products to deleting records referenced by historical orders.
- Store money as PostgreSQL `numeric` /Prisma `Decimal`, not floating-point values.
- Keep order-item snapshots so historic orders do not change when catalog data changes.

## 2. Implemented foundation entities
### Category
- `id`: primary key.
- `name`: unique display name.
- `slug`: unique URL-safe name.
- `description`: optional text.
- `createdAt`, `updatedAt`: timestamps.
- Relationship: one category can be associated with many products; a product can have zero or one category in this initial schema.

### Product
- `id`: primary key.
- `name`, `slug`, `sku`: product identity; slug and SKU are unique.
- `description`: optional text,
- `price`: decimal(12, 2).
- `status`: `DRAFT`, `ACTIVE`, or `ARCHIVED`.
- `categoryId`: optional foreign key to Category.
- `createdAt`, `updatedAt`: timestamps.
- Indexes: `status`, `categoryId`.

## 3. Planed entities
- User, Role, Permission, UserRole, RolePerission.
- Brand.
- ProducCategory (many-to-many product/category relationship).
- ProductVariant, Attribute, Attributealue, VariantAttributeValue.
- ProductImage.
- InventoryLocation, InventoryBalance, InventoryMovement.
- Cart, CartItem.
-Order, OrderItem, Payment, Shipment.
-Review, AuditLog, AIConversation, AIActionLog.

## 4. Important relationships and constraints (Planned)
- Product and Category may become many-to-many through `ProductCategory`.
- Product has many ProductVariants and ProductImages.
- Order has many OrderItems.
- OrderItem stores product name, SKU, unit price, quantity, and line total as purchase-time snapshots.
- Inventory movements should be appedsn-only/auditable; stock updates should use transactions and concurrency-safe rules.
- Payment and order state transitions must be validate by backed services.

## 5. Migration workflow
1. Edit `apps/api/prisma/schema.prisma`.
2. Run `npm run db:migrate -- --name descriptive_change` from the repository root.
3. Review the generated migration SQL.
4. Run tests and verify the database.
5. Commit schema and migration together.

