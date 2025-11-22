# PlaywrightJS_Demo

Simple Playwright JS Demo with UI and API tests using Cucumber.

## 📝 Description

This project demonstrates a **test automation framework** using Playwright + Cucumber with:

* **UI tests** with Playwright Chromium browser
* **API tests** with Playwright `request` context
* **Reusable page objects** and API classes
* **HTML reports** with attachments (screenshots, API logs)
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

### 1️⃣ Run UI tests (tag `@ui`)

This will launch Chromium, record video, and generate screenshots at each step:

```bash
npx cucumber-js --tags "@ui"
```

### 2️⃣ Run API tests (tag `@api`)

This will execute API requests and attach logs in the HTML report and `requests/` folder:

```bash
npx cucumber-js --tags "@api"
```

---

## 📂 Test Artifacts

* **HTML Report**: `reports/report.html`
* **Screenshots** (UI tests): `screenshots/`
* **Videos** (UI tests): `videos/`
* **API logs**: `requests/`

---

## ⚡ Features

* **Page Object Model** for UI
* **Reusable API classes** with `ApiLogger`
* **Cucumber tags** to filter scenarios (`@ui` / `@api`)
* **Hooks** for browser and API context management
* **Automatic screenshots/videos/log attachments**

---

## 🔧 Notes / Best Practices

* Use tags to separate UI and API tests.
* Keep reusable logic in **`src/pages`**, **`src/api`**, and **`src/support`**.
* HTML reports include all attachments for easy debugging.
