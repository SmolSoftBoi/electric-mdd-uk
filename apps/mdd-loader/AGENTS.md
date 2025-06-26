## Scope

Applies to every file inside `apps/mdd-loader/**`.

---

## 1 CLI Contract

- Exit `0` on success, non-zero otherwise.
- Write **only** to the output path supplied; no hidden temp files in repo.

---

## 2 Parsing Rules

1. Use **`csv-parse/sync`**; streaming mode is encouraged for large files.
2. Trim whitespace, preserve leading zeros (`"001"` not `1`).
3. Reject the run if **any** row fails schema validation; surface a clear list of line numbers & errors.

---

## 3 Database Seeding

- Interact with DB through Prisma **inside one transaction**.
- Annotate seed rows with `mddVersion` so multiple versions can coexist.

---

## 4 Performance Budget

- Must load **full** data (≈ 4 M rows) in ≤ 90 s on a 4-core dev container.
- Streaming memory footprint target < 200 MB RSS.

---

## 5 Testing

- Unit tests: use a **mocked PrismaClient**.
- Integration test: load a _truncated_ sample CSV (stored under
  `__fixtures__/sample.csv`) and assert row counts.

---

## 6 Logging & Error Messages

- Use `console.error` for fatal CLI errors; stdout is reserved for progress (`--verbose` flag).
- Error text must include the **MDD Version** and **CSV file name**.

---

## 7 Refusal Policy

If a request:

- Skips validation
- Writes to arbitrary disk locations
- Hard-codes reference data instead of reading CSVs

…the agent must refuse.
