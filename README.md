# PlaywrightJS_Demo


[![Compilation](https://github.com/FilSantos/PlaywrightJS_Demo/actions/workflows/checkCompilation.yml/badge.svg)](https://github.com/FilSantos/PlaywrightJS_Demo/actions/workflows/checkCompilation.yml)
[![Artifact](https://github.com/FilSantos/PlaywrightJS_Demo/actions/workflows/artifact.yml/badge.svg)](https://github.com/FilSantos/PlaywrightJS_Demo/actions/workflows/artifact.yml)
![Node](https://img.shields.io/badge/Node-v23.3.0-green)
![Cucumber](https://img.shields.io/badge/@cucumber/cucumber-v10.0.0-orange)
![Playwright](https://img.shields.io/badge/@playwright/test-v1.49.0-blue)
![pg](https://img.shields.io/badge/pg-v8.16.3-blue)
![License](https://img.shields.io/badge/license-Apache%202.0-blue)

Simple Playwright JS Demo with UI and API tests using Cucumber.

## 📝 Description

This project demonstrates a **test automation framework** using Playwright + Cucumber with:

* **UI tests** with Playwright Chromium browser
* **API tests** with Playwright `request` context
* **Reusable page objects** and API classes
* **HTML reports** with attachments (screenshots, API logs, db logs)
* **Screenshots & videos for @ui tests**

---

## 👤 Contributor

* Filipe Sousa Santos (filsantos1984@gmail.com)

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/FilSantos/PlaywrightJS_Demo.git
cd PlaywrightJS_Demo
```

2. Install dependencies:

```bash
npm install
```

---

## 🧪 Running Tests

### Run UI tests (tag `@ui`)

This will launch Chromium, record video, and generate screenshots at each step:

```bash
npx cucumber-js --tags "@ui"
```

### Run API tests (tag `@api`)

This will execute API requests and attach logs in the HTML report and `requests/` folder:

```bash
npx cucumber-js --tags "@api"
```

### Run db tests (tag `@db`)
This will execute db checks and attach logs in the HTML report and `db-logs/` folder:

```bash
npx cucumber-js --tags "@db"
```

### Run debug tests (tag `@debug`)

```bash
npx cucumber-js --tags "@debug"
```

### Run all tests - not include debug tests

```bash
npx cucumber-js --tags "not @debug"
```

---

## 📂 Test Artifacts

* **HTML Report**: `reports/report.html`
* **JUnit Report**: `reports/report.xml`
* **Screenshots** (UI tests): `screenshots/`
* **Videos** (UI tests): `videos/`
* **API logs**: `requests/`
* **DB logs**: `db-logs/`

---

## ⚡ Features

* **Page Object Model** for UI
* **Reusable API classes** with `ApiLogger`
* **Cucumber tags** to filter scenarios (`@ui` / `@api / ` / `@db / ` / `@debug / `)
* **Hooks** for browser and API context management
* **Automatic screenshots/videos/log attachments**

---

## 🔧 Notes / Best Practices

* Use tags to separate UI and API tests.
* Keep reusable logic in **`src/pages`**, **`src/api`**, and **`src/support`**.
* HTML reports include all attachments for easy debugging.
