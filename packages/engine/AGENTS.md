## Scope
Covers every file under `packages/engine/**`.

---

## 1  Design Principles
1. **Pure functions first** – a rule should be referentially transparent whenever feasible.  
2. **Single Responsibility** – each rule validates *one* business constraint.  
3. **Composable** – rules are registered in `engine/validator.ts`; never hard-code logic elsewhere.  
4. **Low latency** – budget ≤ 150 µs mean validation time per rule (unit bench enforced).

---

## 2  Coding Conventions
- Language **TypeScript 5.x** with `strict` mode on; zero `any` allowed.
- Import from the public barrel (`packages/engine/src/index.ts`) when used outside this package.
- Rule files live in `rules/**` and export a constant named `<camelName>Rule`.
- File naming: `fooBarRule.ts` ⇒ tests `fooBarRule.spec.ts` in `rules/__tests__/`.
- Use **Vitest**; target ≥ 95 % line & branch coverage per rule.  
  Run with `yarn workspace engine vitest run --coverage`.

---

## 3  Adding a New Rule
1. Create file in `rules/` implementing the exported `Rule` interface.  
2. Write **two unit tests**: one passing, one failing case.  
3. Add the rule to the `RULES` array in `engine/validator.ts`.  
4. Update `README.md` (or JSDoc) with rule purpose & error code catalogue.

Agents should refuse to add a rule if **no tests** are supplied.

---

## 4  Data-Access Guard-rails
- Obtain MDD data **only** through `data/mddRepo.ts`; never call Prisma in a rule.
- Memoise repetitive look-ups with the provided in-memory cache helper.
- If a rule needs bulk data, move filtering into SQL (`mddRepo.fetchCartesianSet`) then keep the rule itself pure.

---

## 5  Error Handling
- All `ValidationError.code` strings must be **UPPER_SNAKE_CASE** and documented.
- Severity defaults to `ERROR`; use `WARN` only for non-blocking anomalies.
- Never throw; always return an array (possibly empty).

---

## 6  Performance & Telemetry
- Wrap each rule in an OpenTelemetry span via the helper in `util/logger.ts`.
- Log rule name, duration, and error count; sampling rate = 1 % in prod.

---

## 7  Refusal Policy
If prompted to:
- Bypass tests  
- Add undocumented error codes  
- Perform direct DB writes from a rule  

…the agent must **politely refuse** and suggest a compliant path.
