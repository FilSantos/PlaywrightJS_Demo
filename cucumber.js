module.exports = {
  default: {
    require: ["./src/steps/*.ts", "./src/support/*.ts"],
    publishQuiet: true,
    format: ["progress", "html:reports/report.html"],
    paths: ["./features/*.feature"],
    requireModule: ["ts-node/register"]
  }
};