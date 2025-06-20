## Scope

These rules apply to every file under `/prisma/**` plus any script in
`apps/mdd-loader/**` that touches Prisma Client.

---

## 1 Schema Conventions

- **Model names** must be **PascalCase & singular**.
- **Field names** use **camelCase**; never snake_case.
- Add an **@@map("snake_case_table")** if the physical table needs snake_case.
- Use **natural keys** for MDD reference tables  
  and **autoincrement Int** or **UUID** only for internal app tables.
- Every mutable model must have
  ```prisma
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ```

````

* **Enum** everything that has < 50 known values; prefer `String` enums so role-code expansion (CP1589) is painless.
* Index names follow `idx__<table>__<column(s)>`, unique indexes `uq__…`.

---

## 2  Migrations

* Never edit generated SQL by hand – always regenerate via
  `prisma migrate dev --name <ticket-id>-<summary>`.
* Store migrations in Git **in order**; do not squash-merge them.
* If a migration affects prod data, generate a companion
  `migration.md` explaining the backfill or data-fix steps.

---

## 3  Seed & Reference Data

* The **only** authoritative source for Market Domain Data is the monthly CSV
  drop.
  Seed scripts must ingest those files – never hard-code reference rows.
* Use transaction wrappers in `seed.ts`:

---

## 4  Generated Code & Queries

* Prefer **Prisma Client’s fluent API** (`prisma.model.findMany`) over raw SQL.
* If raw SQL is unavoidable, wrap in `prisma.$queryRawUnsafe«sql»` and add a
  JSDoc explaining the need.
* All queries must include an **explicit `select`** list; no `*`.
* Paginate lists > 500 records with cursor over integer or string key.

---

## 5  Testing & Type Safety

* Unit tests use **Vitest** with the in-memory SQLite DB:
* Mock Prisma Client when logic doesn’t require
  full DB interaction.
* For integration tests, spin up a throw-away Postgres via MCP:

  ```bash
  npx prisma db pull --url $TEST_DB_URL
  ```

---

## 6  Security & Compliance

* Mask secrets in logs (`postgres://******:******@…`).
* When generating seed data, never include real customer information.
* Use parameterised queries; **no string concatenation** into SQL.
````
