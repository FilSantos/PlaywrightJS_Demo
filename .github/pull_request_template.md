# 📌 Pull Request Template

## 📝 Summary
Provide a brief description of the changes introduced in this PR.

---

## 🔧 What Was Done
- Removed unused variables and dead code.
- Deleted temporary or leftover files that were not part of the project structure.
- Ensured all updates follow and maintain the **Page Object Model (POM)** architecture.
- Performed small refactors to improve clarity, maintainability, and consistency.

---

## 📁 Architecture Alignment (POM)
Confirm that the work complies with POM principles:

- Page Objects contain only page-specific selectors and actions.
- Tests reference POM classes instead of raw selectors.
- No temporary logic or utility code leaks into test files.
- Project structure remains clean and predictable.

---

## 🧪 How to Test
Provide instructions on how to validate this PR:

1. Run the test suite.
2. Validate all POM classes load correctly.
3. Ensure no broken references from removed files or variables.
4. Confirm expected behavior in the affected flows.

Example:
```bash
npm run test
