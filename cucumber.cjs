const reporter = require("cucumber-html-reporter");

module.exports = {
  default: {
    require: [
      "./src/steps/*.js",
      "./src/support/*.js"
    ],
    paths: ["./features/*.feature"],

    // 👇 Export JSON and HTML + console progress
    format: [
      "progress",
      "json:./reports/report.json",
      "html:reports/report.html" 
    ],

    // 👇 Set Parallel Execution
    publishQuiet: true,
    parallel: 2,

  }
};
